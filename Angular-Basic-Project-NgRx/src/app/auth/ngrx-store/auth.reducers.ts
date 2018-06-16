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

export function authReducer(state = initialState, action) {
  return state;
}
