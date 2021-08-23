import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import fetchUser from '@actions/fetchUser';

const User = ({ userId, fetchUser }) => {
  useEffect(() => {
    fetchUser(userId);
  }, [userId, fetchUser]);

  return <h4>by {userId}</h4>;
};

export default connect(null, { fetchUser })(User);
