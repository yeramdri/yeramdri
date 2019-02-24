const MODULE_NAME = `SEARCH`

export const SEARCH_KEYWORD = `${MODULE_NAME}/SEARCH_KEYWORD`;
export const SEARCH_KEYWORD_REQUEST = `${MODULE_NAME}/SEARCH_KEYWORD_REQUEST`;
export const SEARCH_KEYWORD_SUCCESS = `${MODULE_NAME}/SEARCH_KEYWORD_SUCCESS`;
export const SEARCH_KEYWORD_FAILURE = `${MODULE_NAME}/SEARCH_KEYWORD_FAILURE`;

export function searchKeyword(keyword, category) {
  return {
    type: SEARCH_KEYWORD,
    keyword,
    category
  };
}

export function searchKeywordRequest() {
  return {
    type: SEARCH_KEYWORD_REQUEST
  }
}

export function searchKeywordSuccess(data) {
  return {
    type: SEARCH_KEYWORD_SUCCESS,
    data
  }
}

export function searchKeywordFailure(err) {
  return {
    type: SEARCH_KEYWORD_FAILURE,
    err
  }
}
