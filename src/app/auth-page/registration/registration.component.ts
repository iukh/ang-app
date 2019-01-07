import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { User } from '../../user';
import { UserService } from '../../user.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.less']
})
export class RegistrationComponent implements OnInit {
userData: FormGroup;
user: any = [];
  constructor(private fb: FormBuilder,
  private userService: UserService,
private router: Router) { }

  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.userData = this.fb.group({
       name: null,
       email: null,
      password: null,
    });
  }
  onSubmit() {
    this.addUser(this.userData.value);
    }
  addUser (user) {
    console.log("started remove")
    console.log(user)
    return this.userService.addUser(user).subscribe(user => {
      this.user = user;
      console.log("response: ")
      console.log(this.user);
      this.router.navigate(['/main']);
    });
 }

}
