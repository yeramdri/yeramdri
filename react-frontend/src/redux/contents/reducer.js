import { SET_CURRENT_CONTENT } from './actions'

const contents = (state = { currentContentId: null }, action) => {
  // debugger
  switch (action.type) {
    case SET_CURRENT_CONTENT:
      console.log('hi hihih')
      console.log(action.id)
      return {
        ...state,
        currentContentId: action.id
      }
    default:
      return state
  }
}

export default contents
