// import * as blockstack from 'blockstack';
import {
  redirectToSignIn,
  signUserOut,
  loadUserData,
  isSignInPending,
  handlePendingSignIn,
} from 'blockstack/lib/auth/authApp';
import { User, GroupMembership } from 'radiks';

import * as Constants from './constants';

const login = () => {
  const redirect = `${window.location.origin}`;
  const manifest = `${redirect}/manifest.json`;
  const scopes = ['store_write', 'publish_data'];
  redirectToSignIn(redirect, manifest, scopes);
  return {
    type: Constants.LOGIN,
  };
};

const loggingIn = () => ({
  type: Constants.USER_SIGNING_IN,
});

const logout = () => {
  signUserOut();
  return {
    type: Constants.USER_LOGOUT,
  };
};

const gotUserData = userData => ({
  type: Constants.USER_SIGNED_IN,
  user: userData,
});

const handleLogIn = () =>
  async function innerHandleSignIn(dispatch) {
    dispatch(loggingIn());
    let userData = loadUserData();
    console.log(userData);
    if (isSignInPending()) {
      userData = await handlePendingSignIn();
      const user = await User.createWithCurrentUser();
      await GroupMembership.cacheKeys();
      await user.save();
      console.log('new user', user);
      dispatch(gotUserData(user));
      console.log(gotUserData(user));
      window.location = '/';
      return user;
    }
    if (userData) {
      await GroupMembership.cacheKeys();
      const user = User.currentUser();
      console.log(user);
      // await user.save();
      dispatch(gotUserData(user));
      console.log('existing user', user);
      return user;
    }
    return null;
  };

export default {
  login,
  handleLogIn,
  logout,
};
