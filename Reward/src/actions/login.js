import {LOGIN} from './actionTypes';

export const loginAction = userData => ({
  type: LOGIN,
  payload: userData,
});
