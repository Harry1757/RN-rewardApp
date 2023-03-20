import {put} from 'redux-saga/effects';
import {setUserData} from '@services/login';
import {saveUserDataRedux} from '@actions/login';
export function* saveUserDataSaga(action) {
  setUserData(action.payload);
}
