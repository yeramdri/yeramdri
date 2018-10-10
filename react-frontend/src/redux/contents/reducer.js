import {
  SET_CURRENT_CONTENT,
  LOAD_ALL_CONTENTS_REQUEST,
  LOAD_ALL_CONTENTS_SUCCESS,
  LOAD_ALL_CONTENTS_FAILURE
} from './actions'

const contents = (
  state = { currentContentId: null, allContents: [], loading: false },
  action
) => {
  switch (action.type) {
    case SET_CURRENT_CONTENT:
      return {
        ...state,
        currentContentId: action.id
      }
    case LOAD_ALL_CONTENTS_REQUEST:
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
    case LOAD_ALL_CONTENTS_FAILURE:
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
}

export default contents
