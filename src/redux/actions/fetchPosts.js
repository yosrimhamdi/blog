import { FETCH_POSTS } from '../types';

const fetchPosts = () => dispatch => {
  const response = await jsonPlaceholder.get('/posts');

  console.log(response);

  dispatch({
    type: FETCH_POSTS,
    payload: response.data,
  });
};

export default fetchPosts;
