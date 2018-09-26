import { call, put, takeEvery, all } from 'redux-saga/effects'
import {
  SEARCH_KEYWORD,
  searchKeywordRequest,
  searchKeywordSuccess,
  searchKeywordFailure
} from './actions'

function* searchKeywordFlow(action) {
  yield put(searchKeywordRequest());
  try {
    // yield call(api)
    debugger;
    yield put(searchKeywordSuccess())
  } catch (err) {
    yield put(searchKeywordFailure(err))
  }
}

export function* watchSearchKeywordFlow() {
  yield takeEvery(SEARCH_KEYWORD, searchKeywordFlow)
}

export default function* searchRoot() {
  yield all([watchSearchKeywordFlow()])
}