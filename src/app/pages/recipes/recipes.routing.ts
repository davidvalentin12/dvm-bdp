import { Routes, RouterModule }  from '@angular/router';

import { Recipes } from './recipes.component';
import { Recipeslist}  from './recipeslist';
import {Recipesedit} from "./recipesedit/recipesedit.component";

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: Recipes,
    children: [
      { path: 'recipeslist', component: Recipeslist },
      { path: 'recipesedit', component: Recipesedit }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
