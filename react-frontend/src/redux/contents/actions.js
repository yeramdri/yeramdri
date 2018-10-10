const MODULE_NAME = `CONTENTS`

export const SET_CURRENT_CONTENT = `${MODULE_NAME}/SET_CURRENT_CONTENT`;

export function setCurrentContent(id) {
  return {
    type: SET_CURRENT_CONTENT,
    id
  };
}

export const LOAD_ALL_CONTENTS = `${MODULE_NAME}/LOAD_ALL_CONTENTS`;
export const LOAD_ALL_CONTENTS_REQUEST = `${MODULE_NAME}/LOAD_ALL_CONTENTS_REQUEST`;
export const LOAD_ALL_CONTENTS_SUCCESS = `${MODULE_NAME}/LOAD_ALL_CONTENTS_SUCCESS`;
export const LOAD_ALL_CONTENTS_FAILURE = `${MODULE_NAME}/LOAD_ALL_CONTENTS_FAILURE`;

export function loadAllContents() {
  return {
    type: LOAD_ALL_CONTENTS
  };
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