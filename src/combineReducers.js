export function combineReducers(reducers){
  return (state = {books, recommendedBooks}, action) => {
    return Object.keys(reducers).reduce(
      (nextState, key)=>{
        nextState[key] = reducers[key](state[key], action);
        return nextState
      }, {}
    )
  }
}
