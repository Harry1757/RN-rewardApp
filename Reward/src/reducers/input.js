import {CHECK_LOGIN} from '@actions/actionTypes';

const initialState = {
  inputText: '',
};

export const inputReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_LOGIN:
      return {
        ...state,
        inputText: action.payload,
      };
    default:
      return state;
  }
};
