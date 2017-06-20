import {Component} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {AuthService} from "../../shared/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class Login {

  public form: FormGroup;
  public password: AbstractControl;
  public username: AbstractControl;
  public submitted: boolean = false;

  constructor(fb: FormBuilder,  private authService: AuthService, private router: Router) {
    this.form = fb.group({
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'username': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });

    this.password = this.form.controls['password'];
    this.username = this.form.controls['username'];
  }

  public onSubmit(values: Object): void {
    this.submitted = true;
    if (this.form.valid) {
      this.login(this.form.value);
    }
  }

  login(credentials: any) {
    this.authService.login(credentials)
      .catch((error) => {
        console.error('Login error', error);
      })
      .then((result) => {
      console.log(result);
        this.router.navigateByUrl('/dashboard');
      });
  }
}
