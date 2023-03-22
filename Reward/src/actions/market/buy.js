import {BUY_PRODUCT} from '../actionTypes';

export const buyProductAction = productData => ({
  type: BUY_PRODUCT,
  payload: productData,
});
