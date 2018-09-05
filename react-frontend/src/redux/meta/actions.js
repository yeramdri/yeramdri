const MODULE_NAME = `META`

export const LOAD_META = `${MODULE_NAME}/LOAD_META`;
export const LOAD_META_REQUEST = `${MODULE_NAME}/LOAD_META_REQUEST`;
export const LOAD_META_SUCCESS = `${MODULE_NAME}/LOAD_META_SUCCESS`;
export const LOAD_META_FAILURE = `${MODULE_NAME}/LOAD_META_FAILURE`;

export function loadMeta() {
  return {
    type: LOAD_META,
  };
}

export function loadMetaRequest() {
  return {
    type: LOAD_META_REQUEST,
  };
}

export function loadMetaSuccess(data) {
  return {
    type: LOAD_META_SUCCESS,
    data,
  };
}

export function loadMetaFailure(error) {
  return {
    type: LOAD_META_FAILURE,
    error,
  };
}