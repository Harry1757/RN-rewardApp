import {SAVE_USER_DATA} from '@actions/actionTypes';
import {getUserData, setUserData} from '@services/setUserData';
console.log(getUserData());
const initialState = {
  user: getUserData() ? JSON.parse(getUserData()) : '',
};

export const saveUserDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_USER_DATA:
      setUserData(action.payload);
      return {...state, user: action.payload};
    default:
      return state;
  }
};
