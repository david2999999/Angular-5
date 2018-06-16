import * as AuthActions from './auth.actions';

export interface  State {
  token: string;
  authenticated: boolean;
}

// state is the current state of the application
// at the beginning there are no states, so we initialize the state
const initialState = {
  token: null,
  authenticated: false
};

export function authReducer(state = initialState, action: AuthActions.AuthActions) {
  switch (action.type) {
    case (AuthActions.SIGNUP):
    case (AuthActions.SIGNIN):
      return {
        ...state,
        authenticated: true
      };
    case (AuthActions.LOGOUT):
      return {
        ...state,
        token: null,
        authenticated: false
      };
    default:
      return state;
  }
}
