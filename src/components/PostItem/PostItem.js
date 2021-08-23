import React from 'react';

import './PostItem.sass';
import User from '../User';

const PostItem = ({ post: { userId, title, body } }) => (
  <div className="post-item">
    <h2>{title}</h2>
    <User userId={userId} />
    <p>{body}</p>
  </div>
);

export default PostItem;
