import {useDispatch, useSelector} from 'react-redux';
import React, {useCallback} from 'react';
import {buyProductAction} from '@actions/market/buy';

export const useBuyProduct = () => {
  const dispatch = useDispatch();
  const marketInfo = useSelector(state => state.saveMarektDataReducer);
  const buyProduct = useCallback(
    product => {
      dispatch(buyProductAction(product));
    },
    [dispatch],
  );

  return {buyProduct, marketInfo};
};
