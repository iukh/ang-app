import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.less']
})
export class AuthPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    console.log(this.LoginWasClicked);
  }

  LoginWasClicked: boolean = false;

  setLoginButtonClicked(clicked: boolean) {
    console.log("eeeee");
      this.LoginWasClicked = clicked;
      console.log(this.LoginWasClicked);
  }
}
