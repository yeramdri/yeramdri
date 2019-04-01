import {asyncState, PENDING, FULFILLED, REJECTED} from 'src/utils';
import {
  LOAD_ALL_CONTENTS_REQUEST,
  LOAD_ALL_CONTENTS_SUCCESS,
  LOAD_ALL_CONTENTS_FAILURE,
  LOAD_KEYWORD_CONTENTS_REQUEST,
  LOAD_KEYWORD_CONTENTS_SUCCESS,
  LOAD_KEYWORD_CONTENTS_FAILURE,
  LOAD_CONTENT,
  LOAD_CONTENT_SUCCESS,
  LOAD_CONTENT_FAILURE,
  LOAD_RECENT_CONTENTS,
  LOAD_RECENT_CONTENTS_SUCCESS,
  LOAD_RECENT_CONTENTS_FAILURE
} from './actions'

const INITIAL_STATE = {
  allContents: [],
  keywordContents: [],
  loading: false,
  err: null,
  content: {
    bibleSection: null,
    description: null,
    multiMedia: [],
    originalLink: null,
    scripture: null,
    tag: null,
    title: null
  },
  contentState: asyncState(),
contents: [],
contentsState: asyncState()
}

const contents = (state = INITIAL_STATE, action) => {
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
        err: {...action.err}
      }
    case LOAD_CONTENT:
      return {
        ...state,
        contentState: asyncState(PENDING)
      }
    case LOAD_RECENT_CONTENTS:
      return {
        ...state,
        contentsState: asyncState(PENDING)
      }
    case LOAD_CONTENT_SUCCESS:
      return {
        ...state,
        content: action.content,
        contentState: asyncState(FULFILLED)
      }
    case LOAD_RECENT_CONTENTS_SUCCESS:
      return {
        ...state,
        contents: action.contents,
        contentsState: asyncState(FULFILLED)
      }
    case LOAD_CONTENT_FAILURE:
      return {
        ...state,
        contentState: asyncState(REJECTED)
      }
    case LOAD_RECENT_CONTENTS_FAILURE:
      return {
        ...state,
        contentsState: asyncState(REJECTED)
      }
    default:
      return state
  }
}

export default contents
