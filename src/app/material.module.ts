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
} from '@angular/material';

import { FormsModule } from '@angular/forms'; 

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
    FormsModule
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
    FormsModule
  ]
})
export class MaterialModule { }