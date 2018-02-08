import { Component, OnInit, Inject } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Dish } from '../shared/dish';
import { Comment } from '../shared/comment';
import { DishService } from '../services/dish.service';

import 'rxjs/Rx'
import { CommaExpr } from '@angular/compiler/src/output/output_ast';
import { visibility } from '../animations/app.animation';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss'],
  animations: [
    visibility()
  ]
})

export class DishdetailComponent implements OnInit {

  dish: Dish;
  dishcopy: null;
  comment: Comment;
  dishIds: {} | number[];
  prev: number;
  next: number;
  commentForm: FormGroup;
  errMess: string;
  visibility: 'shown';
  formErrors = {
    'author': '',
    'comment': ''
  }
  validationMessage = {
    'author': {
      'required': 'Author name is required.',
      'minlength': 'Author name must be at least 2 characters long'
    },
    'comment': {
      'required': 'Comment is required.'
    }
  };

  constructor(private dishservice: DishService,
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder,
    @Inject('baseURL') private BaseURL) {
    this.createForm()
  }

  ngOnInit() {
    this.dishservice.getDishIds()
      .subscribe((dishIds) => this.dishIds = dishIds)

    this.route.params
      .switchMap((params: Params) => {
        this.visibility = 'hidden';
        return this.dishservice.getDish(+params['id']);
      })
      .subscribe((dish) => {
        this.dish = dish;
        this.dishcopy = dish;
        this.setPrevNext(dish.id);
        this.visibility = 'shown';
      }, errmess => this.errMess = <any>errmess);
  }

  createForm() {
    this.commentForm = this.fb.group({
      author: ['', [Validators.minLength(2), Validators.required]],
      rating: 5,
      comment: ['', Validators.required]
    });
    this.commentForm.valueChanges
      .subscribe(data => this.onValuechanged(data))

    this.onValuechanged()
  }

  onValuechanged(data?: any) {
    if (!this.commentForm) { return; }
    const form = this.commentForm;
    for (const field in this.formErrors) {
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const message = this.validationMessage[field];
        for (const key in control.errors) {
          this.formErrors[field] += message[key] + ' '
        }
      }
    }
  };

  onSubmit() {
    this.comment = this.commentForm.value;
    this.comment['date'] = new Date().toISOString();
    this.dishcopy.comments.push(this.comment);
    this.dishcopy.save()
      .subscribe(dish => this.dish = dish);
    this.commentForm.reset({
      author: '',
      rating: 5,
      comment: ''
    });
  }

  setPrevNext(dishId: number) {
    let index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
  }

  goBack(): void {
    this.location.back();
  }

}
