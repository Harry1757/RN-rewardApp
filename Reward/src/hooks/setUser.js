import {useDispatch, useSelector} from 'react-redux';
import React, {useCallback} from 'react';
import {saveUserDataAction} from '@actions/user/setUserData';

export const useSetUser = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector(state => state.saveUserDataReducer);
  const setUserData = useCallback(
    user => {
      dispatch(saveUserDataAction(user));
    },
    [dispatch],
  );

  return {setUserData, userInfo};
};
