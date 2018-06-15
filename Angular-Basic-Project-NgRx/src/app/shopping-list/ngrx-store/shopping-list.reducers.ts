import {Ingredient} from '../../shared/ingredient.model';
import * as ShoppingListActions from './shopping-list.action';

export interface AppState {
  shoppingList: State;
}

export interface  State {
  ingredients: Ingredient[];
  editedIngredient: Ingredient;
  editedIngredientIndex: number;
}

// state is the current state of the application
// at the beginning there are no states, so we initialize the state
const initialState = {
  ingredients: [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
    new Ingredient('Chicken Leg', 5),
    new Ingredient('Salt', 2)
  ],
  editedIngredient: null,
  editedIngredientIndex: -1
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

    case ShoppingListActions.ADD_INGREDIENTS:
      return {
        ...state,
        ingredients: [...state.ingredients, ...action.payload]
      };

    case ShoppingListActions.UPDATE_INGREDIENT:
      const ingredient = state.ingredients[state.editedIngredientIndex];
      // ...action.payload.ingredient will replace ...ingredient
      const updatedIngredient = {
        ...ingredient,
        ...action.payload.ingredient
      };

      const ingredients = [...state.ingredients];
      ingredients[state.editedIngredientIndex] = updatedIngredient;
      return {
        ...state,
        ingredients: ingredients
      };

    case ShoppingListActions.DELETE_INGREDIENT:
      const oldIngredients = [...state.ingredients];
      oldIngredients.splice(state.editedIngredientIndex, 1);
      return {
        ...state,
        ingredients: oldIngredients
      };

    case ShoppingListActions.START_EDIT:
      const editedIngredient = {...state.ingredients[action.payload]};

      return {
        ...state,
        editedIngredient: editedIngredient,
        editedIngredientIndex: action.payload
      };

    default:
      return state;
  }
}
