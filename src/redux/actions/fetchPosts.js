import { FETCH_POSTS } from '../types';
import jsonPlaceholder from '@apis/jsonPlaceholder';

const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts');

  console.log(response);

  dispatch({
    type: FETCH_POSTS,
    payload: response.data,
  });
};

export default fetchPosts;
