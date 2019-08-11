import React from 'react';
import ReactDOM from 'react-dom';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import rootSaga from './rootSaga';
import reducer from './rootReducer';
import Root from './rootRouting';
import './style.css';


const sagaMiddleware = createSagaMiddleware();
const composer = composeWithDevTools;
const store = createStore(reducer, composer(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);


ReactDOM.render(<Provider store={store}>
  <Root/>
</Provider>, document.getElementById('root'));

