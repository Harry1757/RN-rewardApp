import {SAVE_MARKET_DATA} from '@actions/actionTypes';
import {getMarketData} from '@services/setMarketData';
const initialState = {
  productList: getMarketData() ? JSON.parse(getMarketData()) : '',
};

export const saveMarektDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_MARKET_DATA:
      return {...state, productList: action.payload};
    default:
      return state;
  }
};
