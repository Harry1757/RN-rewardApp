import {SAVE_MARKET_DATA} from '../actionTypes';

export const saveMarketDataAction = productData => ({
  type: SAVE_MARKET_DATA,
  payload: productData,
});
