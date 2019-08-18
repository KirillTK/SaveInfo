import { CHECK_AUTHENTICATION, GET_USER, LOGOUT, SET_USER, SIGN_IN, SIGN_UP } from './const';

export const setUser = payload => ({ type: SET_USER, payload });
export const signIn = payload => ({ type: SIGN_IN, payload });
export const signUp = payload => ({ type: SIGN_UP, payload });
export const signOut = () => ({ type: LOGOUT });
export const getUser = () => ({ type: GET_USER });
export const checkAuth = () => ({ type: CHECK_AUTHENTICATION });