import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.less']
})
export class AuthPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  LoginWasClicked: boolean = false;

  setLoginButtonClicked(clicked: boolean) {
      this.LoginWasClicked = clicked;
      console.log(this.LoginWasClicked);
  }
}
