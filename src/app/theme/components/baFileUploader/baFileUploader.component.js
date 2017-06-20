"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var BaFileUploader = (function () {
    function BaFileUploader(renderer) {
        this.renderer = renderer;
        this.fileUploaderOptions = { url: '' };
        this.onFileUpload = new core_1.EventEmitter();
        this.onFileUploadCompleted = new core_1.EventEmitter();
        this.defaultValue = '';
    }
    BaFileUploader.prototype.bringFileSelector = function () {
        this.renderer.invokeElementMethod(this._fileUpload.nativeElement, 'click');
        return false;
    };
    BaFileUploader.prototype.beforeFileUpload = function (uploadingFile) {
        var files = this._fileUpload.nativeElement.files;
        if (files.length) {
            var file = files[0];
            this._onChangeFileSelect(files[0]);
            if (!this._canFleUploadOnServer()) {
                uploadingFile.setAbort();
            }
            else {
                this.uploadFileInProgress = true;
            }
        }
    };
    BaFileUploader.prototype._onChangeFileSelect = function (file) {
        this._inputText.nativeElement.value = file.name;
    };
    BaFileUploader.prototype._onFileUpload = function (data) {
        if (data['done'] || data['abort'] || data['error']) {
            this._onFileUploadCompleted(data);
        }
        else {
            this.onFileUpload.emit(data);
        }
    };
    BaFileUploader.prototype._onFileUploadCompleted = function (data) {
        this.uploadFileInProgress = false;
        this.onFileUploadCompleted.emit(data);
    };
    BaFileUploader.prototype._canFleUploadOnServer = function () {
        return !!this.fileUploaderOptions['url'];
    };
    return BaFileUploader;
}());
__decorate([
    core_1.Input()
], BaFileUploader.prototype, "fileUploaderOptions", void 0);
__decorate([
    core_1.Output()
], BaFileUploader.prototype, "onFileUpload", void 0);
__decorate([
    core_1.Output()
], BaFileUploader.prototype, "onFileUploadCompleted", void 0);
__decorate([
    core_1.Input()
], BaFileUploader.prototype, "defaultValue", void 0);
__decorate([
    core_1.ViewChild('fileUpload')
], BaFileUploader.prototype, "_fileUpload", void 0);
__decorate([
    core_1.ViewChild('inputText')
], BaFileUploader.prototype, "_inputText", void 0);
BaFileUploader = __decorate([
    core_1.Component({
        selector: 'ba-file-uploader',
        styleUrls: ['./baFileUploader.scss'],
        templateUrl: './baFileUploader.html',
    })
], BaFileUploader);
exports.BaFileUploader = BaFileUploader;
