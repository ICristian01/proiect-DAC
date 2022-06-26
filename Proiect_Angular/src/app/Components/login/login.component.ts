import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userEmail:string;
  getValue(value:string)
  {
  console.warn(value);
  this.userEmail=value;
  }

  constructor() {
    this.userEmail="";
   }

  ngOnInit(): void {
  }

}
