import { FETCH_USER } from '../types';

import jsonPlaceholder from '@apis/jsonPlaceholder';

const fetchUser = userId => async dispatch => {
  const response = await jsonPlaceholder('/users/' + userId);

  return dispatch({
    type: FETCH_USER,
    payload: response.data,
  });
};

export default fetchUser;
