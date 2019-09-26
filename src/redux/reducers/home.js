import { DATA_LOADED } from '../constants/action-types'

const initialState = {
  vuelo: []
}

function homeReducer(state = initialState, action) {
  if (action.type === DATA_LOADED){
    return Object.assign({}, state, {
      vuelo: action.payload
    })
  }

  return state;
}

export default homeReducer