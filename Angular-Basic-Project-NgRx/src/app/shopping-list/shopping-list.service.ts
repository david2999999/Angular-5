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

 getIngredient(index: number) {
   return this.ingredients[index];
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

 deleteIngredient(index: number) {
   this.ingredients.splice(index, 1);
   this.ingredientChanged.next(this.ingredients.slice());
 }
}


