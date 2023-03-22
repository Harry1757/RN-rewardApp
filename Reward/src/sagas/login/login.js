import {put} from 'redux-saga/effects';
import {setUserData} from '@services/setUserData';
import {saveUserDataAction} from '@actions/user/setUserData';
export function* saveUserDataSaga(action) {
  setUserData(action.payload);
  yield put(saveUserDataAction(action.payload));
}
