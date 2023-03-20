import {put} from 'redux-saga/effects';
import {saveInputText, justaction} from 'actions/input';

export function* saveInputTextSaga(action) {
  // yield put(saveInputText(action.payload));
}

export function* justactionSaga() {
  console.log('sagaaction 실행');
  // yield put(justaction()); /
}
