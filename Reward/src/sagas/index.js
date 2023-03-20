import {all} from 'redux-saga/effects';
import inputSaga from './ input';
import UserSaga from './login';

export default function* rootSaga() {
  yield all([inputSaga(), UserSaga()]);
}
