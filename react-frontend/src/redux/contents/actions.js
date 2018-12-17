const MODULE_NAME = `CONTENTS`

export const LOAD_ALL_CONTENTS = `${MODULE_NAME}/LOAD_ALL_CONTENTS`
export const LOAD_ALL_CONTENTS_REQUEST = `${MODULE_NAME}/LOAD_ALL_CONTENTS_REQUEST`
export const LOAD_ALL_CONTENTS_SUCCESS = `${MODULE_NAME}/LOAD_ALL_CONTENTS_SUCCESS`
export const LOAD_ALL_CONTENTS_FAILURE = `${MODULE_NAME}/LOAD_ALL_CONTENTS_FAILURE`

export function loadAllContents() {
  return {
    type: LOAD_ALL_CONTENTS
  }
}

export function loadAllContentsRequest() {
  return {
    type: LOAD_ALL_CONTENTS_REQUEST
  }
}

export function loadAllContentsSuccess(data) {
  return {
    type: LOAD_ALL_CONTENTS_SUCCESS,
    data
  }
}

export function loadAllContentsFailure(err) {
  return {
    type: LOAD_ALL_CONTENTS_FAILURE,
    err
  }
}

export const LOAD_KEYWORD_CONTENTS = `${MODULE_NAME}/LOAD_KEYWORD_CONTENTS`
export const LOAD_KEYWORD_CONTENTS_REQUEST = `${MODULE_NAME}/LOAD_KEYWORD_CONTENTS_REQUEST`
export const LOAD_KEYWORD_CONTENTS_SUCCESS = `${MODULE_NAME}/LOAD_KEYWORD_CONTENTS_SUCCESS`
export const LOAD_KEYWORD_CONTENTS_FAILURE = `${MODULE_NAME}/LOAD_KEYWORD_CONTENTS_FAILURE`

export function loadKeywordContents(keyword, category) {
  debugger
  return {
    type: LOAD_KEYWORD_CONTENTS,
    keyword,
    category
  }
}

export function loadKeywordContentsRequest() {
  return {
    type: LOAD_KEYWORD_CONTENTS_REQUEST
  }
}

export function loadKeywordContentsSuccess(data) {
  return {
    type: LOAD_KEYWORD_CONTENTS_SUCCESS,
    data
  }
}

export function loadKeywordContentsFailure(err) {
  return {
    type: LOAD_KEYWORD_CONTENTS_FAILURE,
    err
  }
}
