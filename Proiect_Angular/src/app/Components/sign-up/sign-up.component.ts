import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  repeatedPasswordMessage:string;
  passwordMessage:string;
  constructor() {
    this.repeatedPasswordMessage="  ";
    this.passwordMessage="";
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
  CheckPassword(password:string){
    let currentMessage:string = "The password requires:"
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
      currentMessage += " at least 6 characters";
    }
    if(!hasUpper)
    {
      currentMessage += ", one capital letter";
    }
    if(!hasLower)
    {
      currentMessage += ", one small letter";
    }
    if(!hasDigit)
    {
      currentMessage += ", one digit";
    }
    if(!hasSpecial)
    {
      currentMessage += ", one special character.";
    }

    if(currentMessage=="The password requires:")
    {this.passwordMessage="Password is good! :)";}
    else{
      this.passwordMessage=currentMessage;
    }
  }

  ComparePasswords(password:string, repeatedPassword:string)
  {
    if(password === repeatedPassword)
    {
      this.repeatedPasswordMessage="All good here :D";
      
    }
    else
    {
      this.repeatedPasswordMessage="Passwords don't match!";
    }
  }


  ngOnInit(): void {
  }

}
