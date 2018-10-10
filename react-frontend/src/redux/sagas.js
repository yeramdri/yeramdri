import { all } from 'redux-saga/effects';

import metaRoot from './meta/sagas';
import searchRoot from './search/sagas';
import contentsRoot from './contents/sagas'

export default function* root() {
  yield all([
    metaRoot(),
    searchRoot(),
    contentsRoot()
  ]);
}