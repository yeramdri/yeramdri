import {call, put, takeEvery, all} from 'redux-saga/effects'
import {getAllContents, getContents, getContent, getRecentContents} from 'src/api'
import {
  LOAD_ALL_CONTENTS,
  loadAllContentsRequest,
  loadAllContentsSuccess,
  loadAllContentsFailure,
  LOAD_KEYWORD_CONTENTS,
  loadKeywordContentsRequest,
  loadKeywordContentsSuccess,
  loadKeywordContentsFailure,
  LOAD_CONTENT,
  loadContentSuccess,
  loadContentFailure,
  LOAD_RECENT_CONTENTS,
  loadRecentContentsSuccess,
  loadRecentContentsFailure
} from './actions'

function* loadAllContentsFlow() {
  yield put(loadAllContentsRequest())
  try {
    const {data} = yield call(getAllContents)
    yield put(loadAllContentsSuccess(data))
  } catch (err) {
    yield put(loadAllContentsFailure(err))
  }
}

export function* watchLoadAllContentsFlow() {
  yield takeEvery(LOAD_ALL_CONTENTS, loadAllContentsFlow)
}

function* loadKeywordContentsFlow({keyword, category}) {
  yield put(loadKeywordContentsRequest())
  try {
    const {data} = yield call(getContents, {keyword, category})
    yield put(loadKeywordContentsSuccess(data))
  } catch (err) {
    yield put(loadKeywordContentsFailure(err))
  }
}

export function* watchLoadKeywordContentsFlow() {
  yield takeEvery(LOAD_KEYWORD_CONTENTS, loadKeywordContentsFlow)
}

export function* loadContentFlow({category, id}) {
  try {
    const content = yield call(getContent, {category, id});
    yield put(loadContentSuccess(content));
  } catch (err) {
    yield put(loadContentFailure());
  };
};

export function* watchLoadContent() {
  yield takeEvery(LOAD_CONTENT, loadContentFlow)
}

export function* loadRecentContentsFlow({category}) {
  try {
    const contents = yield call(getRecentContents, category);
    yield put(loadRecentContentsSuccess(contents));
  } catch (err) {
    yield put(loadRecentContentsFailure());
  };
};

export function* watchLoadRecentContents() {
  yield takeEvery(LOAD_RECENT_CONTENTS, loadRecentContentsFlow)
}

export default function* contentsRoot() {
  yield all([
    watchLoadAllContentsFlow(),
    watchLoadKeywordContentsFlow(),
    watchLoadContent(),
    watchLoadRecentContents()
  ]);
}
