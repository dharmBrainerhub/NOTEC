import firestore from '@react-native-firebase/firestore';
import { useEffect } from 'react';


const usersCollection = firestore().collection('Users');

const getUrserDetails=({ userId })=> {
    useEffect(() => {
      const subscriber = firestore()
        .collection('Users')
        .doc(userId)
        .onSnapshot(documentSnapshot => {
          console.log('User data: ', documentSnapshot.data());
        });
      return () => subscriber();
    }, [userId]);
  }

  export {
    usersCollection,
    getUrserDetails
  }