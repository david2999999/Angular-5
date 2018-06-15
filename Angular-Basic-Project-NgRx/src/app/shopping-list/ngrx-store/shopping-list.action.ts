
// each action.type will be a string, so we use constants to avoid mistyping
import {Action} from '@ngrx/store';
import {Ingredient} from '../../shared/ingredient.model';

export const ADD_INGREDIENT = 'ADD_INGREDIENT';

export class AddIngredient implements Action {
  readonly type: string = ADD_INGREDIENT;
  payload: Ingredient;
}

export type ShoppingListAction = AddIngredient;
