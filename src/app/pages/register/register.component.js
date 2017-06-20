"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var validators_1 = require("../../theme/validators");
var Register = (function () {
    function Register(fb) {
        this.submitted = false;
        this.form = fb.group({
            'name': ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(4)])],
            'email': ['', forms_1.Validators.compose([forms_1.Validators.required, validators_1.EmailValidator.validate])],
            'passwords': fb.group({
                'password': ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(4)])],
                'repeatPassword': ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(4)])]
            }, { validator: validators_1.EqualPasswordsValidator.validate('password', 'repeatPassword') })
        });
        this.name = this.form.controls['name'];
        this.email = this.form.controls['email'];
        this.passwords = this.form.controls['passwords'];
        this.password = this.passwords.controls['password'];
        this.repeatPassword = this.passwords.controls['repeatPassword'];
    }
    Register.prototype.onSubmit = function (values) {
        this.submitted = true;
        if (this.form.valid) {
            // your code goes here
            // console.log(values);
        }
    };
    return Register;
}());
Register = __decorate([
    core_1.Component({
        selector: 'register',
        templateUrl: './register.html',
        styleUrls: ['./register.scss']
    })
], Register);
exports.Register = Register;
