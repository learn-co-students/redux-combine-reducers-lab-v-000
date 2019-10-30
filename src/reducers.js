export function books(state = [], action) {
  console.log
  switch (action.type) {
 
     case "ADD_BOOK":
      return state.concat(action.payload);
 
    case "REMOVE_BOOK":
      const idx = state.indexOf(action.payload);
      return [ ...state.slice(0, idx), ...state.slice(idx + 1)]
 
    default:
      return state;
  }
}

export function recommendedBooks(state = [], action) {
  switch (action.type) {
 
     case "ADD_RECOMMENDED_BOOK":
      return state.concat(action.payload);
 
    case "REMOVE_RECOMMENDED_BOOK":
     const idx = state.indexOf(action.payload);
    return [ ...state.slice(0, idx), ...state.slice(idx + 1)]
 
    default:
      return state;
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
