import {takeLatest, takeEvery} from 'redux-saga/effects';
import {SAVE_INPUT_TEXT, JUST_ACTION} from '@actions/actionTypes';
import {saveInputTextSaga, justactionSaga} from '@sagas/ input/input';

function* inputSaga() {
  yield takeLatest(JUST_ACTION, justactionSaga);
  // yield takeLatest(SAVE_INPUT_TEXT, saveInputTextSaga);
}

export default inputSaga;
