import {SAVE_INPUT_TEXT} from '@actions/actionTypes';
import {JUST_ACTION} from '@actions/actionTypes';

export const saveInputText = text => ({
  type: SAVE_INPUT_TEXT,
  payload: text,
});

export const justaction = () => ({
  type: JUST_ACTION,
});
