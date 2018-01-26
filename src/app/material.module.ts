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
  MatOptionModule
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
    MatOptionModule
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
    MatOptionModule
  ]
})
export class MaterialModule { }