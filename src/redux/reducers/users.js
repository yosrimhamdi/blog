import { FETCH_USER } from '../types';

const users = (state = {}, action) => {
  switch (action.type) {
    case FETCH_USER:
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};

export default users;
