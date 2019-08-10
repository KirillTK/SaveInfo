import { all, takeEvery } from 'redux-saga/effects';
import { GET_USER, LOGOUT, SIGN_IN, SIGN_UP } from './const';


function* SIGN_UP_SAGA() {

}

function* SIGN_IN_SAGA() {

}

function* SIGN_OUT_SAGA() {

}

function* GET_USER_SAGA() {

}

export default function* authRootSaga() {
  yield all([
    takeEvery(SIGN_IN, SIGN_IN_SAGA),
    takeEvery(LOGOUT, SIGN_OUT_SAGA),
    takeEvery(GET_USER, GET_USER_SAGA),
    takeEvery(SIGN_UP, SIGN_UP_SAGA),
  ]);
}