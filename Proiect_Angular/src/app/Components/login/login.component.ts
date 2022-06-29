import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email:string;
  password:string;
  rememberMe:boolean;

  authErrorMessage:string;
  constructor(private router:Router) {
    this.email="";
    this.password="";
    this.authErrorMessage="";
    this.rememberMe=false;
   }
   ngOnInit(): void {
  }
   GoToRegister(){
    this.router.navigate(['register']);
   }
   GoToMovies(){
    if(this.email!="" && this.password!="")
    {
      this.authErrorMessage="";
      this.router.navigateByUrl('movies');
    }
    else
    {
      this.authErrorMessage="❌None of these fields can be empty!";
    }
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
  

}
