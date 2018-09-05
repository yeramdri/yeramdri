import {
  LOAD_META_REQUEST,
  LOAD_META_SUCCESS,
  LOAD_META_FAILURE
} from './actions'

const meta = (state = { test: 'true' }, action) => {
  switch (action.type) {
    case LOAD_META_REQUEST:
      return {
        ...state,
        loading: true
      }
    case LOAD_META_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: { ...action.data }
      }
    case LOAD_META_FAILURE:
      return {
        ...state,
        loading: false,
        error: { ...action.error }
      }
    default:
      return state
  }
}

export default meta