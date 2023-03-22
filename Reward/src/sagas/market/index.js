import {takeLatest} from 'redux-saga/effects';
import {BUY_PRODUCT} from '@actions/actionTypes';
import {buyProductSaga} from './buy';
function* MareketSaga() {
  yield takeLatest(BUY_PRODUCT, buyProductSaga);
}

export default MareketSaga;
