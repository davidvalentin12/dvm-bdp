import {Component, OnInit, Input} from '@angular/core';
import {Recipe} from "../../../../shared/models/recipe.model";

@Component({
  selector: 'recipe-display',
  templateUrl: './recipe-display.component.html',
  styleUrls: ['./recipe-display.component.scss']
})
export class RecipeDisplayComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor() {
  }

  ngOnInit() {
    console.log(this.recipe);
  }

  removeStep(index) {
    this.recipe.steps.splice(index, 1);
  }

  stepUp(index) {
    this.move(index, index - 1, this.recipe.steps);
  }

  stepDown(index) {
    this.move(index, index + 1, this.recipe.steps);
  }

  private move(old_index, new_index, array) {
    if (new_index >= array.length) {
      let k = new_index - array.length;
      while ((k--) + 1) {
        array.push(undefined);
      }
    }
    array.splice(new_index, 0, array.splice(old_index, 1)[0]);
    return array; // for testing purposes
  };

}
