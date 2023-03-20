import {LOGIN} from '@actions/actionTypes';
import {getUserData} from '@services/login';
const initialState = {
  user: JSON.parse(getUserData()),
};

export const uerDataSaveReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {...state, user: action.payload};
    default:
      return state;
  }
};
