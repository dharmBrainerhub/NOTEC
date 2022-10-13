import * as types from './ActionsTypes';
import auth from '@react-native-firebase/auth';
export const isLogin = payload => {
  console.log('payload of login >>. ', payload);
  return {
    type: types.IS_LOGIN,
    payload,
  };
};

export const logout = () => {
  console.log('logout +++++===');
  auth()
    .signOut()
    .then(() => console.log('User signed out!'));
  return {
    type: types.LOGOUT,
  };
};

export const userData = payload => {
  console.log('data >> of user payload > ', payload);
  return {
    type: types.USER_DETAILS,
    payload,
  };
};
