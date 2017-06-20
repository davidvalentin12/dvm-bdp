"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Todo = (function () {
    function Todo(_baConfig, _todoService) {
        var _this = this;
        this._baConfig = _baConfig;
        this._todoService = _todoService;
        this.dashboardColors = this._baConfig.get().colors.dashboard;
        this.newTodoText = '';
        this.todoList = this._todoService.getTodoList();
        this.todoList.forEach(function (item) {
            item.color = _this._getRandomColor();
        });
    }
    Todo.prototype.getNotDeleted = function () {
        return this.todoList.filter(function (item) {
            return !item.deleted;
        });
    };
    Todo.prototype.addToDoItem = function ($event) {
        if (($event.which === 1 || $event.which === 13) && this.newTodoText.trim() != '') {
            this.todoList.unshift({
                text: this.newTodoText,
                color: this._getRandomColor(),
            });
            this.newTodoText = '';
        }
    };
    Todo.prototype._getRandomColor = function () {
        var _this = this;
        var colors = Object.keys(this.dashboardColors).map(function (key) { return _this.dashboardColors[key]; });
        var i = Math.floor(Math.random() * (colors.length - 1));
        return colors[i];
    };
    return Todo;
}());
Todo = __decorate([
    core_1.Component({
        selector: 'todo',
        templateUrl: './todo.html',
        styleUrls: ['./todo.scss']
    })
], Todo);
exports.Todo = Todo;
