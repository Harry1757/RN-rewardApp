import {put} from 'redux-saga/effects';
import {setMarketData} from '@services/setMarketData';
import {saveMarketDataAction} from '@actions/market/setMarketData';
export function* buyProductSaga(action) {
  setMarketData(action.payload);
  yield put(saveMarketDataAction(action.payload));
}
