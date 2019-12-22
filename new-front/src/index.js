import React from 'react';
import ReactDOM from 'react-dom';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { routerMiddleware } from 'connected-react-router';
import { history, reducer } from './rootReducer';
import rootSaga from './rootSaga';
import Root from './rootRouting';
import './style.css';
import 'typeface-roboto';


const sagaMiddleware = createSagaMiddleware();
const middleWares = [routerMiddleware(history), sagaMiddleware];
const composer = composeWithDevTools;
const store = createStore(reducer, composer(applyMiddleware(...middleWares)));

sagaMiddleware.run(rootSaga);


ReactDOM.render(<Provider store={store}><Root/></Provider>, document.getElementById('root'));
