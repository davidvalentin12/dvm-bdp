import {Injectable} from '@angular/core';
import gql from 'graphql-tag';
import {ApolloCurrentResult} from 'apollo-client/core/ObservableQuery';
import {Apollo} from 'apollo-angular';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class RecipesService {

    client: Apollo;

    public queryUserProfile = gql`
      query User {
        viewer {
          user {
            username
          }
        }
      }
    `;

    constructor(private apollo: Apollo) {
        this.client = apollo;
    }


    // createRecipe(recipe: RecipeModel): Promise<ApolloCurrentResult<RecipeModel>> {
    //     return this.client.getClient().mutate({
    //         mutation: gql``,
    //         variables: {
    //             input: {}
    //         }
    //     }).then((result: ApolloCurrentResult<RecipeModel>) => {
    //         const {data, error} = result;
    //         if (error) {
    //             throw error;
    //         }
    //         this.setCredential({token: data['loginUser']['token'], id: data['loginUser']['user']['id']});
    //         this.syncUser(data['loginUser']['user']['id']);
    //         this.setAuth(data['loginUser']['user']);
    //         return result;
    //     });
    // }

}
