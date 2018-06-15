import {Ingredient} from '../../shared/ingredient.model';
import * as ShoppingListActions from './shopping-list.action';

// state is the current state of the application
// at the beginning there are no states, so we initialize the state
const initialState = {
  ingredients: [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ]
};

export function shoppingListReducer(state = initialState, action: ShoppingListActions.ShoppingListAction) {
  switch (action.type) {
    case ShoppingListActions.ADD_INGREDIENT:
      return {
        // this is the spread operator that creates a shallow copy of the state
        // returns a copy of the state and also a new list of ingredients, current ingredient + new ingredient
        ...state,
        ingredients: [...state.ingredients, action.payload]
      };
    default:
      return state;
  }
}
