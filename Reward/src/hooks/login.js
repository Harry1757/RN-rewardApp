import {useDispatch, useSelector} from 'react-redux';
import React, {useCallback} from 'react';
import {loginAction} from '@actions/login';

export const useSaveUserData = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector(state => state.uerDataSaveReducer);
  const saveUserInfo = useCallback(
    user => {
      dispatch(loginAction(user));
    },
    [dispatch],
  );

  return {saveUserInfo, userInfo};
};
