import {Component, OnInit} from '@angular/core';
import gql from 'graphql-tag';

import {Apollo} from 'apollo-angular';
import {Subscription} from "apollo-client";
import {RecipesService} from "../services/recipes.service";


@Component({
    selector: 'recipes-list-component',
    templateUrl: 'recipeslist.html',
    styleUrls: ['recipeslist.scss']
})

export class Recipeslist {
    private recipeList: Subscription;

    private allRecipesQuery = gql`
      query GetAllRecipes {
          viewer {
            allRecipes {
              edges {
                node {
                  id
                  name
                  fullRecipe
                  steps
                  description
                  ingredients {
                    edges {
                      node {
                        id
                        name
                        description
                      }
                    }
                  }
                  categories {
                    edges {
                      node {
                        id
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `;

    constructor(private recipesService: RecipesService, private apollo: Apollo) {

    }

    ngOnInit() {
        this.apollo.watchQuery({
            query: this.allRecipesQuery,
        }).subscribe(({data}) => {
            this.recipeList = data['viewer']['allRecipes']['edges'];
            console.log(this.recipeList);
        });

    }
}
