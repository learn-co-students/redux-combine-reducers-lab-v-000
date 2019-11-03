

export function books(state=[], action){
  switch (action.type) {
    case 'ADD_BOOK':
      return [...state, action.payload]
      break;
    case 'REMOVE_BOOK':
      const idx = state.indexOf(action.payload)
      return [...state.slice(0, idx), ...state.slice(idx+1)]
      break;
    default:
      return state
  }
}

export function recommendedBooks(state=[], action){
  switch (action.type) {
    case 'ADD_RECOMMENDED_BOOK':
      return [...state, action.payload]
      break;
    case 'REMOVE_RECOMMENDED_BOOK':
      const idx = state.indexOf(action.payload)
      return [...state.slice(0, idx), ...state.slice(idx+1)]
      break;
    default:
      return state
  }
}
export function combineReducers(reducers){
  return (state = {}, action) => {
    return Object.keys(reducers).reduce(
      (nextState, key)=>{
        nextState[key] = reducers[key](state[key], action);
        return nextState
      }, {}
    )
  }
}

const rootReducer = combineReducers({books, recommendedBooks})
