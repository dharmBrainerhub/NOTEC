import * as types from './ActionsTypes';
import auth from '@react-native-firebase/auth';
import {noteCollection, usersCollection} from '../../utils/FirebaseServices';
export const isLogin = payload => {
  console.log('payload of login >>. ', payload);
  return {
    type: types.IS_LOGIN,
    payload,
  };
};

export const onBoarding = payload => {
  console.log('payload of login >>. ', payload);
  return {
    type: types.ONBOARDING,
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

export const deleteAccount = () => {
  let user = auth().currentUser;
  user
    .delete()
    .then(() => {
      alert('User deleted');
      usersCollection.doc(user.uid).delete();
      noteCollection.doc(user.uid).delete();
    })
    .catch(error => console.log(error));

  return {
    type: types.DELETEACCOUNT,
  };
};

export const userData = payload => {
  console.log('data >> of user payload > ', payload);
  return {
    type: types.USER_DETAILS,
    payload,
  };
};
