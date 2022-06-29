import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  email:string;
  password:string;
  firstName:string;
  lastName:string;
  authErrorMessage:string;
  emailMessage:string;
  passwordMessage:string;
  confirmPasswordMessage:string;
  

  constructor(private router:Router) {
    this.email="";
    this.password="";
    this.firstName="";
    this.lastName="";
    this.confirmPasswordMessage="";
    this.passwordMessage="";
    this.emailMessage="";
    this.authErrorMessage="";
   }
   
   isNumber(str: string): boolean {
    if (typeof str !== 'string') {
      return false;
    }
  
    if (str.trim() === '') {
      return false;
    }
  
    return !Number.isNaN(Number(str));
  }
  isLetter(character:any): boolean{
    if (typeof character !== 'string') {
      return false;
    }
    if(character.toLowerCase()>='a' && character.toLowerCase()<='z')
    return true;
    return false;
  }
  GoToMovies(){
    if(this.emailMessage =="" && this.password!="✅Password good." 
    && this.firstName!="" && this.lastName!="" && this.confirmPasswordMessage =="✅Passwords match")
    {
      this.authErrorMessage="";
      this.router.navigateByUrl('movies');
    }
    else
    {
      this.authErrorMessage="❌All fields must pe valid!";
    }
   }

  checkEmail(email:string)
  {
    if(!email.includes("@") || !email.includes(".") || 
    !this.isLetter(email[email.length-1]) || email.includes(" "))
    {
    this.emailMessage="❌The email is not valid.";
    }
    else
    {
      this.emailMessage="";
    }
  }
  CheckPassword(password:string){
    let currentMessage:string = "❌The password requires:"
    let hasSixCharacters:boolean=password.length>=6;
    let hasUpper:boolean = false;
    let hasLower:boolean = false;
    let hasDigit:boolean = false;
    let hasSpecial:boolean = false;
    
    for (let index = 0; index < password.length; index++) {
      if(password[index] === password[index].toUpperCase() && this.isLetter(password[index])){ 
      hasUpper=true;
      }

      if(password[index] === password[index].toLowerCase() && this.isLetter(password[index])){
        hasLower=true;
      }
      if(this.isNumber(password[index])){
        hasDigit=true;
      }
      if(!this.isLetter(password[index]) && !this.isNumber(password[index])){
      hasSpecial=true;
      }
      
    }
    if(!hasSixCharacters)
    {
      currentMessage += " at least 6 characters;";
    }
    if(!hasUpper)
    {
      currentMessage += "one capital letter;";
    }
    if(!hasLower)
    {
      currentMessage += " one small letter;";
    }
    if(!hasDigit)
    {
      currentMessage += " one digit;";
    }
    if(!hasSpecial)
    {
      currentMessage += " one special character.";
    }

    if(currentMessage=="❌The password requires:")
    {this.passwordMessage="✅Password good.";}
    else{
      this.passwordMessage=currentMessage;
    }
  }

  ComparePasswords(password:string, confirmPassword:string)
  {
    if(password === confirmPassword)
    {
      this.confirmPasswordMessage="✅Passwords match";
      
    }
    else
    {
      this.confirmPasswordMessage="❌Passwords don't match!";
    }
  }

  getEmail(email:string){
    this.email=email;
  }
  getPassword(password:string){
    this.password=password;
  }
  getFirstName(firstName:string){
    this.firstName=firstName;
  }
  getLastName(lastName:string){
    this.lastName=lastName;
  }
  
  ngOnInit(): void {
  }

}
