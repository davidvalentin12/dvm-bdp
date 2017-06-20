"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Layouts = (function () {
    function Layouts() {
        this.defaultPicture = 'assets/img/theme/no-photo.png';
        this.profile = {
            picture: 'assets/img/app/profile/Nasta.png'
        };
        this.uploaderOptions = {
            // url: 'http://website.com/upload'
            url: '',
        };
        this.fileUploaderOptions = {
            // url: 'http://website.com/upload'
            url: '',
        };
    }
    Layouts.prototype.ngOnInit = function () {
    };
    return Layouts;
}());
Layouts = __decorate([
    core_1.Component({
        selector: 'layouts',
        templateUrl: './layouts.html',
    })
], Layouts);
exports.Layouts = Layouts;
