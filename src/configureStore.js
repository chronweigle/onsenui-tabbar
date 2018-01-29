import { createStore } from 'redux';

import { rootReducer } from './reducers';

export const createInitialStore = (initialState = {}) => {
  return createStore(rootReducer, initialState);
};