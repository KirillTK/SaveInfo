export const SET_ERROR = 'SET_ERROR';
export const SET_SUCCESS_MESSAGE = 'SET_SUCCESS_MESSAGE';
export const GET_ERROR = 'GET_ERROR';
export const GET_SUCCESS_MESSAGE = 'GET_SUCCESS_MESSAGE';
export const SHOW_MESSAGE = 'SHOW_MESSAGE';

export const setError = payload => ({type: SET_ERROR, payload});
export const setSuccessMessage = payload => ({type: SET_SUCCESS_MESSAGE, payload});
export const showMessage = payload => ({type: SHOW_MESSAGE, payload});
