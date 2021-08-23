import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import fetchPosts from '@actions/fetchPosts';
import PostItem from './PostItem/PostItem';

const PostList = ({ fetchPosts, posts }) => {
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  if (!posts.length) {
    return <div>loading...</div>;
  }

  const renderedPosts = posts.map(post => (
    <PostItem key={post.id} post={post} />
  ));

  return <div>{renderedPosts}</div>;
};

const mapStateToProps = state => ({
  posts: state.posts,
});

export default connect(mapStateToProps, { fetchPosts })(PostList);
