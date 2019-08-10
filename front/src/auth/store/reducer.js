import { SET_USER } from './const';

const defaultState = {
  user: null,
};

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_USER: {
      return state;
    }
    default:
      return state;
  }
};