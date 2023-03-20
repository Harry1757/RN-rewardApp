import {takeLatest} from 'redux-saga/effects';
import {LOGIN} from '@actions/actionTypes';
import {saveUserDataSaga} from './login';

function* UserSaga() {
  yield takeLatest(LOGIN, saveUserDataSaga);
}

export default UserSaga;
