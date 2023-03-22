import {takeLatest, put} from 'redux-saga/effects';
import {LOGIN} from '@actions/actionTypes';
import {setUserData} from '@services/setUserData';
import {saveUserDataAction} from '@actions/user/setUserData';
export function* saveUserDataSaga(action) {
  setUserData(action.payload);
  yield put(saveUserDataAction(action.payload));
}
function* UserSaga() {
  yield takeLatest(LOGIN, saveUserDataSaga);
}

export default UserSaga;
