import { all } from 'redux-saga/effects';
import authRootSaga from './auth/saga';
import messageRoot from './message/saga';


export default function* rootSaga() {
  yield all([
    authRootSaga(),
    messageRoot(),
  ])
}
