"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var register_component_1 = require("./register.component");
// noinspection TypeScriptValidateTypes
var routes = [
    {
        path: '',
        component: register_component_1.Register
    }
];
exports.routing = router_1.RouterModule.forChild(routes);
