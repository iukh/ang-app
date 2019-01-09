import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { User } from '../../user';
import { UserService } from '../../user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  userData: FormGroup;
  user: any = [];
  isLoggedIn :boolean = false;
  redirectUrl :string;

  constructor(private fb: FormBuilder,
  private userService: UserService,
  private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.userData = this.fb.group({
       email: null,
       password: null
    });
  }
  onSubmit() {
    this.loginUser(this.userData.value);

  }
  loginUser (user) {
    return this.userService.loginUser({
      username: user.email,
      password: user.password
    }).subscribe(
        suc => {
            console.log(suc);
            this.isLoggedIn = true;
            if (suc.isAdmin) {
              this.router.navigate(['/admin']);
            } else {
              this.router.navigate(['/main']);
            }
        },
        err => {
          console.log("ERROR!!!");
            console.log(err);
        }
    );
  }
}
