import React, {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {saveInputText} from '@actions/input';

export const useGetInput = () => {
  const dispatch = useDispatch();
  const inputState = useSelector(state => state.inputReducer);
  //   const saveInput = useCallback(
  //     text => {
  //       dispatch(saveInputText(text));
  //     },
  //     [dispatch],
  //   );
  const saveInput = text => dispatch(saveInputText(text));
  return {inputState, saveInput};
};
