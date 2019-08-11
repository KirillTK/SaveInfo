import { combineReducers } from 'redux';
import { createBrowserHistory } from 'history';
import { connectRouter } from 'connected-react-router';
import { auth } from './auth/store/reducer';

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  router: connectRouter(history),
  auth,
});

export const reducer = rootReducer;