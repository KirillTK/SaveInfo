import { SET_USER } from './const';

const defaultState = {
  user: null,
};

export const auth = (state = defaultState, action) => {
  switch (action.type) {
    case SET_USER: {
      return {...state, user: action.payload};
    }
    default:
      return state;
  }
};