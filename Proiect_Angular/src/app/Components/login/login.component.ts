import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email:string;
  password:string;
  rememberMe:boolean;

  constructor() {
    this.email="";
    this.password="";
    this.rememberMe=false;
   }
   getEmail(email:string){
    this.email=email;
  }
  getPassword(password:string){
    this.password=password;
  }
  getRememberMe(rememberMe:boolean){
    this.rememberMe=rememberMe;
    console.log(this.rememberMe);
  }
  ngOnInit(): void {
  }

}
