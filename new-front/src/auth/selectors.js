export const getAuthState = state => state.auth;

export const selectUser = state => getAuthState(state).user;