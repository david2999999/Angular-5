import {Action} from '@ngrx/store';
import {Ingredient} from '../shared/ingredient.model';

// each action.type will be a string, so we use constants to avoid mistyping
export const ADD_INGREDIENT = 'ADD_INGREDIENT';

// state is the current state of the application
// at the beginning there are no states, so we initialize the state
const initialState = {
  ingredients: [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ]
};

export function shoppingListReducer(state = initialState, action: Action) {
  switch (action.type) {
    case: ADD_INGREDIENT:
      return {
        // this is the spread operator which expands the old states, so all properties are added
        ...state,
        ingredients: [...state.ingredients, action]
      }
  }
  return state;
}
