import { combineReducers } from 'redux';
import { authReducer } from './auth/store/reducer';

const rootReducer = combineReducers({
  authReducer,
});

export const reducer = rootReducer;