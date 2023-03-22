import {all} from 'redux-saga/effects';
import UserSaga from './login';
import MareketSaga from './market';

export default function* rootSaga() {
  yield all([UserSaga(), MareketSaga()]);
}
