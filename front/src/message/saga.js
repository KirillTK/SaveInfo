import {takeEvery} from '@redux-saga/core/effects';
import { all } from 'redux-saga/effects';
import {SET_ERROR, SET_SUCCESS_MESSAGE, SHOW_MESSAGE} from 'message/actions';
import {message} from 'antd';

function* DISPLAY_ERROR_SAGA({payload}) {
  message.error(payload);
}

function* DISPLAY_SUCCESS_SAGA({payload}) {
  message.success(payload);
}


export default function* messageRoot(){
  yield all([
    takeEvery(SET_ERROR, DISPLAY_ERROR_SAGA),
    takeEvery(SET_SUCCESS_MESSAGE, DISPLAY_SUCCESS_SAGA),
  ]);
};

