"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var pages_component_1 = require("./pages.component");
// noinspection TypeScriptValidateTypes
// export function loadChildren(path) { return System.import(path); };
exports.routes = [
    {
        path: 'login',
        loadChildren: 'app/pages/login/login.module#LoginModule'
    },
    {
        path: 'register',
        loadChildren: 'app/pages/register/register.module#RegisterModule'
    },
    {
        path: 'pages',
        component: pages_component_1.Pages,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'editors', loadChildren: './editors/editors.module#EditorsModule' },
            { path: 'components', loadChildren: './components/components.module#ComponentsModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'ui', loadChildren: './ui/ui.module#UiModule' },
            { path: 'forms', loadChildren: './forms/forms.module#FormsModule' },
            { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'maps', loadChildren: './maps/maps.module#MapsModule' }
        ]
    }
];
exports.routing = router_1.RouterModule.forChild(exports.routes);
