import * as types from '../Actions/ActionsTypes';

const initialState = {
  login: false,
  userDetails: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.IS_LOGIN:
      console.log('reducers >>. ', action.payload);
      return {
        ...state,
        login: action.payload,
      };
    case types.USER_DETAILS: {
      console.log('user ________reducers >>. ', action.payload);
      return {
        ...state,
        userDetails: action.payload,
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