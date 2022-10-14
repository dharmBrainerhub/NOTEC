import * as types from '../Actions/ActionsTypes';

const initialState = {
  noteData: [],
  isLoadding: false,
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
    case types.ADDNOTE: {
      return {
        ...state,
        noteData: action.payload,
      };
    }
    case types.NOTELOADING: {
      console.log('add note ________loading >>. ', action.payload);
      return {
        isLoadding: action.payload,
      };
    }
    case types.LOGOUT:
      return {
        initialState,
      };
    case types.DELETEACCOUNT:
      return {
        initialState,
      };
    default:
      return state;
  }
};
