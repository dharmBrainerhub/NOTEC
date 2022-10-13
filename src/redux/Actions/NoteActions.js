import {noteCollection} from '../../utils/FirebaseServices';
import * as types from './ActionsTypes';
import {v4 as uuidv4} from 'uuid';

export const addNote = payload => {
  return async dispatch => {
    const add = {
      data: [
        {
          title: 'Test title',
          desc: 'Testing Desc.....',
          date: new Date(),
          color: 'lime',
          _id: Math.floor(Math.random() * 1145415614635351),
          user_id: 'xrwQY3FWSrRjXG5S0MLLRkkEsWj2',
        },
      ],
    };
    let isExist = await doesDocExist('xrwQY3FWSrRjXG5S0MLLRkkEsWj2');
    console.log('first', isExist);
    if (isExist) {
      let response = await noteCollection
        .doc('xrwQY3FWSrRjXG5S0MLLRkkEsWj2')
        .get();
      let oldNotes = await response?.data().data;

      let updateArray = {data: [...oldNotes, ...add?.data]};
      noteCollection
        .doc('xrwQY3FWSrRjXG5S0MLLRkkEsWj2')
        .update(updateArray)
        .then(response => {
          console.log('response firestore  >> ', response);
        })
        .catch(e => {
          console.log('catch >> ', e);
        })
        .finally(f => {
          console.log('final >> ', f);
        });
    } else {
      noteCollection
        .doc('xrwQY3FWSrRjXG5S0MLLRkkEsWj2')
        .set(add)
        .then(response => {
          console.log('response firestore  >> ', response);
        })
        .catch(e => {
          console.log('catch >> ', e);
        })
        .finally(f => {
          console.log('final >> ', f);
        });
    }
    dispatch({type: types.ADDNOTE, payload: updateArray});
  };
};

export const getNote = payload => {
  return async dispatch => {
    noteCollection.get().then(snapshot => {
      snapshot.docs.forEach(doc => {
        console.log('note ss', JSON.parse(doc._document.data.toString()));
      });
    });
    dispatch({type: types.GETNOTE, payload});
  };
};

const doesDocExist = docID => {
  return noteCollection
    .doc(docID)
    .get()
    .then(doc => {
      return doc.exists;
    });
};
