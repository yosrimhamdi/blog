import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import fetchUser from '@actions/fetchUser';

const User = ({ userId, fetchUser, user }) => {
  useEffect(() => {
    fetchUser(userId);
  }, [userId, fetchUser]);

  if (!user) {
    return null;
  }

  return <h4>by {user.name}</h4>;
};

const mapStateToProps = (state, ownProps) => ({
  user: state.users[ownProps.userId],
});

export default connect(mapStateToProps, { fetchUser })(User);
