import { all } from 'redux-saga/effects';
import authRootSaga from './auth/store/saga';



export default function* rootSaga() {
  yield all([
    authRootSaga(),
  ])
}