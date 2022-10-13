import * as types from '../Actions/ActionsTypes';

const initialState = {
  noteData: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GETNOTE: {
      console.log('note ________reducers >>. ', action.payload);
      return {
        ...state,
        noteData: action.payload,
      };
    }
    case types.LOGOUT:
      return {
        initialState,
      };
    default:
      return state;
  }
};
