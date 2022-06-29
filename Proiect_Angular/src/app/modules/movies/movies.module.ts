import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';
import { AddNewComponent } from 'src/app/features/add-new/add-new.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MoviesRoutingModule } from './movies-routing.module';

@NgModule({
  declarations: [
    AddNewComponent,
    DashboardComponent
  ],
  imports: [
    MoviesRoutingModule,
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MoviesModule { }
