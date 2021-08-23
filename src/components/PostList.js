import React, { useEffect } from 'react';

import fetchPosts from '@actions/fetchPosts';

const PostList = () => {
  useEffect(() => {
    fetchPosts();
  }, []);

  return <div>postList</div>;
};

export default PostList;
