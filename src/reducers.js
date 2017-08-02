export function books(state= [], action) {
  switch(action.type){

    case "ADD_BOOK":
      return [...state, action.payload]
    case "REMOVE_BOOK":
      var index = state.indexOf(action.payload)
      return [].concat(state.slice(0,index), state.slice(index+1))
    default:
      return state
  }
}

export function recommendedBooks(state= [], action){
  switch (action.type) {
  case "ADD_RECOMMENDED_BOOK":
    return [].concat(state, action.payload)
  case "REMOVE_RECOMMENDED_BOOK":
    let idx = state.indexOf(action.payload)
    return [].concat(state.slice(0, idx), state.slice(idx + 1, state.length))
  default:
    return state
  }
}

export function combineReducers(reducers){
  return (state = {}, action) => {
    return Object.keys(reducers).reduce(
      (nextState, key) => {
        nextState[key] = reducers[key](state[key], action);
        return nextState
      }, {}
    )
  }
}
