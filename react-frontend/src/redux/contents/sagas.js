import { call, put, takeEvery, all } from 'redux-saga/effects'
import { getAllContents, getContents } from 'src/api'
import {
  LOAD_ALL_CONTENTS,
  loadAllContentsRequest,
  loadAllContentsSuccess,
  loadAllContentsFailure,
  LOAD_KEYWORD_CONTENTS,
  loadKeywordContentsRequest,
  loadKeywordContentsSuccess,
  loadKeywordContentsFailure
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

function* loadKeywordContentsFlow({ keyword, category }) {
  yield put(loadKeywordContentsRequest())
  try {
    const { data } = yield call(getContents, { keyword, category })
    yield put(loadKeywordContentsSuccess(data))
  } catch (err) {
    yield put(loadKeywordContentsFailure(err))
  }
}

export function* watchLoadKeywordContentsFlow() {
  yield takeEvery(LOAD_KEYWORD_CONTENTS, loadKeywordContentsFlow)
}

export default function* contentsRoot() {
  yield all([watchLoadAllContentsFlow(), watchLoadKeywordContentsFlow()])
}
