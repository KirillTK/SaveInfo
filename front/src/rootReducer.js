import { combineReducers } from 'redux';
import { auth } from './auth/store/reducer';

const rootReducer = combineReducers({
  auth,
});

const reducer = rootReducer;
export default reducer;