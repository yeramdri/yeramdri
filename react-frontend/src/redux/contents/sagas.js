import { call, put, takeEvery, all } from 'redux-saga/effects'
import { getAllContents } from 'src/api'
import {
  LOAD_ALL_CONTENTS,
  loadAllContentsRequest,
  loadAllContentsSuccess,
  loadAllContentsFailure
} from './actions'

function* loadAllContentsFlow() {
  yield put(loadAllContentsRequest())
  try {
    const { data } = yield call(getAllContents)
    yield put(loadAllContentsSuccess(data))
  } catch (err) {
    yield put(loadAllContentsFailure(err))
  }
}

export function* watchLoadAllContentsFlow() {
  yield takeEvery(LOAD_ALL_CONTENTS, loadAllContentsFlow)
}

export default function* contentsRoot() {
  yield all([watchLoadAllContentsFlow()])
}
