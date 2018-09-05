import {
  takeEvery,
  put,
  // call,
  all
} from 'redux-saga/effects';

import { LOAD_META, loadMetaRequest, loadMetaSuccess, loadMetaFailure } from './actions'

export function* loadMetaFlow() {
  yield put(loadMetaRequest());
  try {
    yield put(loadMetaSuccess());
  } catch(error) {
    yield put(loadMetaFailure(error));
  }
}

export function* watchLoadMetaFlow() {
  yield takeEvery(LOAD_META, loadMetaFlow)
}

export default function* metaRoot() {
  yield all([watchLoadMetaFlow()])
}