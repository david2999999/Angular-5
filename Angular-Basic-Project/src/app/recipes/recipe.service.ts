import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe> ();

  private recipes: Recipe[] = [
    new Recipe('Fry Chicken', 'Deep fried chicken recipe is delicious either hot or cold.',
      'https://cdn3.tmbi.com/secure/RMS/attachments/37/300x300/Crispy-Fried-Chicken_exps6445_PSG143429D03_05_5b_RMS.jpg'),
    new Recipe('Strawberry Cobbler I', 'Serve with cream or ice cream.', 'https://images.media-allrecipes.com/images/55969.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
