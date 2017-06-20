import {Component, OnInit} from '@angular/core';
import {Ingredient} from "../../../shared/models/ingredient.model";
import gql from 'graphql-tag';
import {Apollo} from "apollo-angular";
import {RecipesService} from "../services/recipes.service";

@Component({
  selector: 'ingredients-edit',
  templateUrl: './ingredients-edit.component.html',
  styleUrls: ['./ingredients-edit.component.scss']
})
export class IngredientsEditComponent implements OnInit {

  public ingredientsList = [Ingredient];
  public selectedIngredients = [Ingredient];
  public currentIngredient = {};

  private allIngredientsQuery = gql`
      query GetAllIngredients {
          viewer {
            allIngredients {
              edges {
                node {
                    id
                    name
                    description
                     
                }
              }
            }
          }
        }
      `;
  private createIngredientMutation = gql`
      mutation createIngredient($ingredient: Ingredient!) {
      createIngredient(ingredient: $ingredient) {
        changedIngredient {
          description
          name
          id
          createdAt
          modifiedAt
        }
      }
    }
      `;

  constructor(private recipesService: RecipesService, private apollo: Apollo) {

  }

  ngOnInit() {
    this.currentIngredient = new Ingredient('', '');
    this.getIngredients();

  }

  getIngredients() {
    this.apollo.watchQuery({
      query: this.allIngredientsQuery,
    }).subscribe(({data}) => {
      this.ingredientsList = data['viewer']['allIngredients']['edges'];
      console.log(this.ingredientsList);
    });
  }

  addIngredient(name, description) {
    let ingredient = new Ingredient(name, description);
    this.createIngredient(ingredient);
  }

  createIngredient(ingredient) {
    this.apollo.mutate({
      mutation: this.createIngredientMutation,
      variables: {
        ingredient: ingredient
      }
    }).subscribe(({data}) => {
      console.log('got data', data);
    }, (error) => {
      console.log('there was an error sending the query', error);
    });
  }


}
