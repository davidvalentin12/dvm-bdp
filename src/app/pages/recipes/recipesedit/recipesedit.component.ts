import {Component, OnInit} from '@angular/core';
import gql from 'graphql-tag';

import {Apollo} from 'apollo-angular';
import {Subscription} from "apollo-client";
import {RecipesService} from "../services/recipes.service";
import {Recipe} from "../../../shared/models/recipe.model";
import {Step} from "../../../shared/models/step.model";


@Component({
  selector: 'recipes-edit-component',
  templateUrl: 'recipesedit.html',
  styleUrls: ['recipesedit.scss']
})

export class Recipesedit {
  private recipesService: RecipesService;
  private apollo: Apollo;
  private recipeList: Subscription;
  public recipe: Recipe;
  public currentRecipe: Recipe;
  public currentStep: Step;

  timerOptions = [{label: 'None', value: undefined}, {label: 'Active', value: 'active'}, {
    label: 'Passive',
    value: 'passive'
  }];

  constructor() {
  }

  ngOnInit() {
    this.currentRecipe = new Recipe('', '', {}, []);
    this.recipe = new Recipe('', '', {}, []);
    this.currentStep = new Step('', 60000);

  }

  addTitleAndDescription(name, description) {
    this.recipe.name = name;
    this.recipe.description = description;
  }

  addStep(stepForm) {
    this.recipe.steps.push(stepForm);
    this.currentStep = new Step('', 60000);

    console.log(stepForm);
  }


}
