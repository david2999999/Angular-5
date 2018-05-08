import {Ingredient} from '../shared/ingredient.model';
import {EventEmitter} from '@angular/core';

export class ShoppingListService {
  ingredientChanged = new EventEmitter<Ingredient[]>();

 private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
    new Ingredient('Chicken Leg', 5),
    new Ingredient('Salt', 2)
  ];

 getIngredient() {
   return this.ingredients.slice();
 }

 addIngredient(ingredient: Ingredient) {
   this.ingredients.push(ingredient);
   this.ingredientChanged.emit(this.ingredients.slice());
 }
}


