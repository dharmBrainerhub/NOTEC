import {noteCollection} from '../../utils/FirebaseServices';
import * as types from './ActionsTypes';
import {v4 as uuidv4} from 'uuid';

export const addNote = payload => {
  return async dispatch => {
    let isExist = await doesDocExist(payload.data[0]?.user_id);
    console.log('user is isExist', isExist);
    console.log('payloadpayloadpayload ', payload);
    if (isExist) {
      let noteRes = await noteCollection.doc(payload.data[0]?.user_id).get();
      let oldNotes = await noteRes?.data().data;

      let updateArray = {data: [...oldNotes, ...payload?.data]};
      console.log('update array >>> ', updateArray);
      noteCollection
        .doc(payload.data[0]?.user_id)
        .update(updateArray)
        .then(response => {
          console.log('response firestore  >> ', response);
          dispatch({type: types.NOTELOADING, payload: false});
        })
        .catch(e => {
          console.log('catch >> ', e);
          dispatch({type: types.NOTELOADING, payload: false});
        })
        .finally(f => {
          console.log('final >> ', f);
          dispatch({type: types.NOTELOADING, payload: false});
        });
    } else {
      noteCollection
        .doc(payload.data[0]?.user_id)
        .set(payload)
        .then(response => {
          console.log('response firestore  >> ', response);
          dispatch({type: types.NOTELOADING, payload: false});
        })
        .catch(e => {
          console.log('catch >> ', e);
          dispatch({type: types.NOTELOADING, payload: false});
        })
        .finally(f => {
          console.log('final >> ', f);
          dispatch({type: types.NOTELOADING, payload: false});
        });
    }
    dispatch({type: types.ADDNOTE, payload: ''});
  };
};

export const getUserNote = userId => {
  return async dispatch => {
    noteCollection.doc(userId).onSnapshot(documentSnapshot => {
      const notes = documentSnapshot.data();
      dispatch({type: types.GETNOTE, payload: notes});
    });
  };

  //   noteCollection
  //     .get()
  //     .then(snapshot => {
  //       snapshot.forEach(doc => {
  //         const data = doc.data();
  //         console.log(data.data);
  //         dispatch({type: types.GETNOTE, payload:data.data});
  //       });
  //     })
  //     .catch(err => {
  //       console.log('Error getting documents', err);
  //     });
  // };
};

const doesDocExist = docID => {
  return noteCollection
    .doc(docID)
    .get()
    .then(doc => {
      return doc.exists;
    });
};

export const noteLoadding = payload => {
  return dispatch => {
    dispatch({type: types.NOTELOADING, payload});
  };
};
