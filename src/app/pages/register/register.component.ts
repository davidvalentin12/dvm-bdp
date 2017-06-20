import {Component} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {EmailValidator, EqualPasswordsValidator} from '../../theme/validators';
import {AuthService} from "../../shared/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'register',
  templateUrl: './register.html',
  styleUrls: ['./register.scss']
})
export class Register {

  public form: FormGroup;
  public username: AbstractControl;
  public email: AbstractControl;
  public password: AbstractControl;
  public repeatPassword: AbstractControl;
  public passwords: FormGroup;

  public submitted: boolean = false;


  constructor(fb: FormBuilder, private authService: AuthService, private router: Router) {

    this.form = fb.group({
      'username': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'email': ['', Validators.compose([Validators.required, EmailValidator.validate])],
      'passwords': fb.group({
        'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
        'repeatPassword': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
      }, {validator: EqualPasswordsValidator.validate('password', 'repeatPassword')})
    });

    this.username = this.form.controls['username'];
    this.email = this.form.controls['email'];
    this.passwords = <FormGroup> this.form.controls['passwords'];
    this.password = this.passwords.controls['password'];
    this.repeatPassword = this.passwords.controls['repeatPassword'];
  }

  public onSubmit(values: Object): void {
    this.submitted = true;
    if (this.form.valid) {
      const credentials = Object.assign({}, this.form.value);
      credentials.password = credentials.passwords.password;
      delete credentials.passwords;
      this.register(credentials);
    }
  }

  register(credentials: any) {
    this.authService.register(credentials)
      .catch((error) => {
        console.error('Register error', error);
      })
      .then((result) => {
        this.login(credentials);
      });
  }

  login(credentials: any) {
    this.authService.login(credentials)
      .catch((error) => {
        console.error('Login error', error);
      })
      .then((result) => {
        this.router.navigateByUrl('/dashboard');
      });
  }
}
