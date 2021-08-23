import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import fetchPosts from '@actions/fetchPosts';

const PostList = ({ fetchPosts }) => {
  useEffect(() => {
    fetchPosts();
  }, []);

  return <div>postList</div>;
};

export default connect(null, { fetchPosts })(PostList);
