import { GET_USER, LOGOUT, SET_USER, SIGN_IN, SIGN_UP } from './const';

export const setUser = payload => ({ type: SET_USER, payload });
export const signIn = () => ({ type: SIGN_IN });
export const signUp = () => ({ type: SIGN_UP });
export const signOut = () => ({ type: LOGOUT });
export const getUser = () => ({ type: GET_USER });