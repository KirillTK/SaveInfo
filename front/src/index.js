import React from 'react';
import ReactDOM from 'react-dom';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import App from './App';



const sagaMiddleware = createSagaMiddleware();
const composer = composeWithDevTools;
const store = createStore(null, composer(applyMiddleware(sagaMiddleware)));

// sagaMiddleware.run(watcherSaga);


ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>, document.getElementById('root'));
