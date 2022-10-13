import firestore from '@react-native-firebase/firestore';
import {useEffect} from 'react';

const usersCollection = firestore().collection('Users');
const noteCollection = firestore().collection('Notes');

const getUrserDetails = async userId => {
  let userInfo = usersCollection
    .doc(userId)
    .onSnapshot(documentSnapshot => documentSnapshot.data());
  console.log('userInfouserInfo', userInfo);
  return 'test';
};

export {usersCollection, noteCollection, getUrserDetails};
