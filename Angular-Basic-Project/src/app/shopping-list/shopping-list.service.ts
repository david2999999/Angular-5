import {Ingredient} from '../shared/ingredient.model';
import {EventEmitter} from '@angular/core';
import {Subject} from 'rxjs/Subject';

export class ShoppingListService {
  ingredientChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

 private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
    new Ingredient('Chicken Leg', 5),
    new Ingredient('Salt', 2)
  ];

 getIngredients() {
   return this.ingredients.slice();
 }

 getIngredient(index: number) {
   return this.ingredients[index];
 }

 addIngredient(ingredient: Ingredient) {
   this.ingredients.push(ingredient);
   this.ingredientChanged.next(this.ingredients.slice());
 }

 addIngredients(ingredients: Ingredient[]) {
   // for (const ingredient of ingredients) {
   //   this.addIngredient(ingredient);
   // }
   this.ingredients.push(...ingredients);
   this.ingredientChanged.next(this.ingredients.slice());
 }

 updateIngredient(index: number, newIngredient: Ingredient) {
   this.ingredients[index] = newIngredient;
   this.ingredientChanged.next(this.ingredients.slice());
 }
}


