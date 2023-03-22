import {useDispatch, useSelector} from 'react-redux';
import React, {useCallback} from 'react';
import {loginAction} from '@actions/user/login';

export const useLogin = () => {
  const dispatch = useDispatch();
  const login = useCallback(
    user => {
      dispatch(loginAction(user));
    },
    [dispatch],
  );

  return {login};
};
