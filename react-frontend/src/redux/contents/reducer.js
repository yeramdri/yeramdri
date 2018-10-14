import {
  LOAD_ALL_CONTENTS_REQUEST,
  LOAD_ALL_CONTENTS_SUCCESS,
  LOAD_ALL_CONTENTS_FAILURE,
  LOAD_KEYWORD_CONTENTS_REQUEST,
  LOAD_KEYWORD_CONTENTS_SUCCESS,
  LOAD_KEYWORD_CONTENTS_FAILURE
} from './actions'

const contents = (
  state = { allContents: [], keywordContents: [], loading: false, err: null },
  action
) => {
  switch (action.type) {
    case LOAD_ALL_CONTENTS_REQUEST:
    case LOAD_KEYWORD_CONTENTS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case LOAD_ALL_CONTENTS_SUCCESS:
      return {
        ...state,
        allContents: [...action.data],
        loading: false
      }
    case LOAD_KEYWORD_CONTENTS_SUCCESS:
      return {
        ...state,
        keywordContents: [...action.data],
        loading: false
      }
    case LOAD_ALL_CONTENTS_FAILURE:
    case LOAD_KEYWORD_CONTENTS_FAILURE:
      return {
        ...state,
        loading: false,
        err: { ...action.err }
      }
    default:
      return state
  }
}

export default contents
