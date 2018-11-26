import {
  SEARCH_KEYWORD,
  SEARCH_KEYWORD_REQUEST,
  SEARCH_KEYWORD_SUCCESS,
  SEARCH_KEYWORD_FAILURE
} from './actions'

const search = (
  state = { loading: false, data: [], keyword: '', err: null },
  action
) => {
  switch (action.type) {
    case SEARCH_KEYWORD:
      return {
        ...state,
        keyword: action.keyword
      }
    case SEARCH_KEYWORD_REQUEST:
      return {
        ...state,
        loading: true
      }
    case SEARCH_KEYWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        data: [...action.data]
      }
    case SEARCH_KEYWORD_FAILURE:
      return {
        ...state,
        loading: false,
        err: { ...action.err }
      }
    default:
      return state
  }
}

export default search
