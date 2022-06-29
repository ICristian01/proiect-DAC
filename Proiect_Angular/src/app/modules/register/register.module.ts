import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { SignUpComponent } from 'src/app/Components/sign-up/sign-up.component';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    SignUpComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    MatButtonModule
  ]
})
export class RegisterModule { }
