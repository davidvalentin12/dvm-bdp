import {Recipe} from "./recipe.model";
export class Category {


  constructor(public name: string,
              public description: string,
              public recipes?: [Recipe]) {

  }

}
