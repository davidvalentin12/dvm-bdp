import {Recipe} from "./recipe.model";
export class Ingredient {


  constructor(public name: String,
              public description: String,
              public  id?: String,
              public  createdAt?: Date,
              public modifiedAt?: Date,
              public recipes?: [Recipe]) {

  }
}
