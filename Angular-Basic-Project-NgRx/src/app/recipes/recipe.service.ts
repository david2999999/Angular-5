import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {Subject} from 'rxjs/Subject';

export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe('Fry Chicken',
      'Deep fried chicken recipe is delicious either hot or cold.',
      'https://cdn3.tmbi.com/secure/RMS/attachments/37/300x300/Crispy-Fried-Chicken_exps6445_PSG143429D03_05_5b_RMS.jpg',
      [
        new Ingredient('Chicken', 2),
        new Ingredient('Flour', 2)
      ]),
    new Recipe('Strawberry Cobbler I',
      'Serve with cream or ice cream.',
      'https://images.media-allrecipes.com/images/55969.jpg',
      [
        new Ingredient('Sugar', 10),
        new Ingredient('Strawberry', 2)
      ])
  ];

  constructor() {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes);
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes);
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes);
  }

}
