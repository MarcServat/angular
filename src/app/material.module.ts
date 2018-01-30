import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatInputModule,
  MatCheckboxModule,  
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatListModule,
  MatDialogModule,
  MatDialogRef,
  MatCheckbox,
  MatSlideToggleModule,
  MatSelectModule,
  MatProgressSpinnerModule,
  MatGridListModule,
  MatSliderModule
} from '@angular/material';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; 
 

@NgModule({
  imports: [
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,    
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatSliderModule
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatSliderModule
  ]
})
export class MaterialModule { }