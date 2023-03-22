import {SAVE_USER_DATA} from '../actionTypes';

export const saveUserDataAction = userData => ({
  type: SAVE_USER_DATA,
  payload: userData,
});
