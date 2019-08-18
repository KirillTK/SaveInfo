import { all, takeEvery, call, put, select } from 'redux-saga/effects';
import { push as navigate } from 'connected-react-router';
import { CHECK_AUTHENTICATION, GET_USER, LOGOUT, SIGN_IN, SIGN_UP } from './const';
import auth from './services/auth';
import { setUser } from './actions';
import { selectUser } from './selectors';

function* GET_USER_SAGA() {
  try {
    const user = yield call(auth.getUser);
    yield put(setUser(user.data));
  } catch (error) {
    console.log('error', error.message);
  }
}

function* CHECK_AUTHENTICATION_SAGA() {
  try {
    const user = yield select(selectUser);
    if (!user) {
      yield* GET_USER_SAGA();
    }
  } catch (error) {
    console.log('error');
  }
}

function* SIGN_IN_SAGA({ payload }) {
  try {
    yield call(auth.logIn, payload);
    yield* GET_USER_SAGA();
    yield put(navigate('/profile'));
  } catch (error) {
    console.log('error', error);
  }
}

function* SIGN_UP_SAGA({ payload }) {
  try {
    yield call(auth.signUp, payload);
    yield* SIGN_IN_SAGA({ payload });
    yield* GET_USER_SAGA();
    yield put(navigate('/profile'));
  } catch (error) {
    console.log('error', error);
  }
}

function* SIGN_OUT_SAGA() {

}

export default function* authRootSaga() {
  yield all([
    takeEvery(SIGN_IN, SIGN_IN_SAGA),
    takeEvery(LOGOUT, SIGN_OUT_SAGA),
    takeEvery(GET_USER, GET_USER_SAGA),
    takeEvery(SIGN_UP, SIGN_UP_SAGA),
    takeEvery(CHECK_AUTHENTICATION, CHECK_AUTHENTICATION_SAGA),
  ]);
}