import { call, put, takeEvery, all } from 'redux-saga/effects'
import { getContents } from 'src/api'
import {
  SEARCH_KEYWORD,
  searchKeywordRequest,
  searchKeywordSuccess,
  searchKeywordFailure
} from './actions'

function* searchKeywordFlow(action) {
  const {keyword, category} = action
  yield put(searchKeywordRequest())
  try {
    const { data } = yield call(getContents, {keyword, category})
    yield put(searchKeywordSuccess(data))
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
