import { getAuthState } from '../utils/selectors';

export const selectUser = state => getAuthState(state).user;