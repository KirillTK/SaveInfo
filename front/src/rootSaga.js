import { all } from 'redux-saga/effects';
import authRootSaga from './auth/saga';



export default function* rootSaga() {
  yield all([
    authRootSaga(),
  ])
}