import { all, takeEvery, call, put } from 'redux-saga/effects';
import { GET_USER, LOGOUT, SIGN_IN, SIGN_UP } from './const';
import auth from '../../services/auth';
import { setUser } from './actions';

function* SIGN_UP_SAGA() {

}

function* SIGN_IN_SAGA() {

}

function* SIGN_OUT_SAGA() {

}

function* GET_USER_SAGA() {
  try {
    const user = yield call(auth.getUser);
    yield put(setUser(user));
  } catch (error) {
    console.log('error', error.message);
  }

}

export default function* authRootSaga() {
  yield all([
    takeEvery(SIGN_IN, SIGN_IN_SAGA),
    takeEvery(LOGOUT, SIGN_OUT_SAGA),
    takeEvery(GET_USER, GET_USER_SAGA),
    takeEvery(SIGN_UP, SIGN_UP_SAGA),
  ]);
}