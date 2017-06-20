import {Ingredient} from "./ingredient.model";
import {Category} from "./category.model";

export class Recipe {


    constructor(public description: String,
                public name: String,
                public fullRecipe: Object,
                public steps: Object[],
                public ingredients?: [Ingredient],
                public categories?: [Category],
                public id?: string,
                public createdAt?: Date,
                public modifiedAt?: Date) {

    }
}
