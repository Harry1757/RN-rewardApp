import {takeLatest, put} from 'redux-saga/effects';
import {BUY_PRODUCT} from '@actions/actionTypes';
import {setMarketData} from '@services/setMarketData';
import {saveMarketDataAction} from '@actions/market/setMarketData';

export function* buyProductSaga(action) {
  setMarketData(action.payload);
  yield put(saveMarketDataAction(action.payload));
}

function* MareketSaga() {
  yield takeLatest(BUY_PRODUCT, buyProductSaga);
}

export default MareketSaga;
