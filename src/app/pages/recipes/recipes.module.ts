import {NgModule}      from '@angular/core';
import {CommonModule}  from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AppTranslationModule} from '../../app.translation.module';
import {NgaModule} from '../../theme/nga.module';

import {Recipes} from './recipes.component';
import {routing}       from './recipes.routing';
import {Recipeslist} from "./recipeslist/recipeslist.component";
import {RecipesService} from "./services/recipes.service";
import {Recipesedit} from "./recipesedit/recipesedit.component";
import {RecipeDisplayComponent} from "./components/recipe-display/recipe-display.component";
import {IngredientsEditComponent} from "./ingredients-edit/ingredients-edit.component";
import {IngredientsListComponent} from "./ingredients-list/ingredients-list.component";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppTranslationModule,
    NgaModule,
    routing
  ],
  declarations: [
    Recipes,
    Recipeslist,
    Recipesedit,
    RecipeDisplayComponent,
    IngredientsEditComponent,
    IngredientsListComponent
  ],
  providers: [RecipesService]
})
export class RecipesModule {
}
