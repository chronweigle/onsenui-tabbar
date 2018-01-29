import { combineReducers } from 'redux';

const tabReducer = (state = { loginPage: true }, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { loginPage: true };
    case 'SETTINGS':
      return { loginPage: false };
    default:
      return state;
  }
};

// Add firebase to reducers
export const rootReducer = combineReducers({
  tabReducer
});