const MODULE_NAME = `CONTENTS`

export const LOAD_ALL_CONTENTS = `${MODULE_NAME}/LOAD_ALL_CONTENTS`;
export const LOAD_ALL_CONTENTS_REQUEST = `${MODULE_NAME}/LOAD_ALL_CONTENTS_REQUEST`;
export const LOAD_ALL_CONTENTS_SUCCESS = `${MODULE_NAME}/LOAD_ALL_CONTENTS_SUCCESS`;
export const LOAD_ALL_CONTENTS_FAILURE = `${MODULE_NAME}/LOAD_ALL_CONTENTS_FAILURE`;
export const LOAD_KEYWORD_CONTENTS = `${MODULE_NAME}/LOAD_KEYWORD_CONTENTS`;
export const LOAD_KEYWORD_CONTENTS_REQUEST = `${MODULE_NAME}/LOAD_KEYWORD_CONTENTS_REQUEST`;
export const LOAD_KEYWORD_CONTENTS_SUCCESS = `${MODULE_NAME}/LOAD_KEYWORD_CONTENTS_SUCCESS`;
export const LOAD_KEYWORD_CONTENTS_FAILURE = `${MODULE_NAME}/LOAD_KEYWORD_CONTENTS_FAILURE`;
export const LOAD_CONTENT = `${MODULE_NAME}/LOAD_CONTENT`;
export const LOAD_CONTENT_SUCCESS = `${MODULE_NAME}/LOAD_CONTENT_SUCCESS`;
export const LOAD_CONTENT_FAILURE = `${MODULE_NAME}/LOAD_CONTENT_FAILURE`;
export const LOAD_RECENT_CONTENTS = `${MODULE_NAME}/LOAD_RECENT_CONTENTS`;
export const LOAD_RECENT_CONTENTS_SUCCESS = `${MODULE_NAME}/LOAD_RECENT_CONTENTS_SUCCESS`;
export const LOAD_RECENT_CONTENTS_FAILURE = `${MODULE_NAME}/LOAD_RECENT_CONTENTS_FAILURE`;
export const CREATE_CONTENT = `${MODULE_NAME}/CREATE_CONTENT`;
export const CREATE_CONTENT_SUCCESS = `${MODULE_NAME}/CREATE_CONTENT_SUCCESS`;
export const CREATE_CONTENT_FAILURE = `${MODULE_NAME}/CREATE_CONTENT_FAILURE`;

export const loadAllContents = () => ({ type: LOAD_ALL_CONTENTS });
export const loadAllContentsRequest = () => ({ type: LOAD_ALL_CONTENTS_REQUEST });
export const loadAllContentsSuccess = data => ({ type: LOAD_ALL_CONTENTS_SUCCESS, data });
export const loadAllContentsFailure = err => ({ type: LOAD_ALL_CONTENTS_FAILURE, err });
export const loadKeywordContents = (keyword, category) => ({
  type: LOAD_KEYWORD_CONTENTS, keyword, category
});
export const loadKeywordContentsRequest = () => ({ type: LOAD_KEYWORD_CONTENTS_REQUEST });
export const loadKeywordContentsSuccess = data => ({
  type: LOAD_KEYWORD_CONTENTS_SUCCESS, data
});
export const loadKeywordContentsFailure = err => ({
  type: LOAD_KEYWORD_CONTENTS_FAILURE, err
});
export const loadContent = (category, id) => ({ type: LOAD_CONTENT, category, id });
export const loadContentSuccess = content => ({ type: LOAD_CONTENT_SUCCESS, content });
export const loadContentFailure = err => ({ type: LOAD_CONTENT_FAILURE, err });
export const loadRecentContents = category => ({ type: LOAD_RECENT_CONTENTS, category });
export const loadRecentContentsSuccess = contents => ({ type: LOAD_RECENT_CONTENTS_SUCCESS, contents });
export const loadRecentContentsFailure = err => ({ type: LOAD_RECENT_CONTENTS_FAILURE, err });
export const createContent = data => ({ type: CREATE_CONTENT, data });
export const createContentSuccess = () => ({ type: CREATE_CONTENT_SUCCESS });
export const createContentFailure = err => ({ type: CREATE_CONTENT_FAILURE, err });