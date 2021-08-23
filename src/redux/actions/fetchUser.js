import _ from 'lodash';

import { FETCH_USER } from '../types';
import jsonPlaceholder from '@apis/jsonPlaceholder';

const _fetchUser = _.memoize(async (userId, dispatch) => {
  const response = await jsonPlaceholder('/users/' + userId);

  dispatch({
    type: FETCH_USER,
    payload: response.data,
  });
});

const fetchUser = userId => dispatch => _fetchUser(userId, dispatch);

export default fetchUser;
