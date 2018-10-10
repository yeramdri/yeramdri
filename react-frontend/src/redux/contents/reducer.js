import { SET_CURRENT_CONTENT } from './actions'

const contents = (state = { currentContentId: null }, action) => {
  switch (action.type) {
    case SET_CURRENT_CONTENT:
      return {
        ...state,
        currentContentId: action.id
      }
    default:
      return state
  }
}

export default contents
