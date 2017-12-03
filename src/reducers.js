

export function books(state = [], action){
  switch (action.type) {
  case "ADD_BOOK":
    return [].concat(state, action.payload)
  case "REMOVE_BOOK":
    let idx = state.indexOf(action.payload)
    return [].concat(state.slice(0, idx), state.slice(idx + 1, state.length))
  default:
    return state
  }
}


export function recommendedBooks(state = [], action){
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

 export function combineReducers(reducers){    // instead of this tedious function, Redux has it's own combineReducers function that behaves nearly identical to this:
  return (state = {}, action) => {
    return Object.keys(reducers).reduce(            // import { combineReducers } from 'redux'
          (nextState, key)=>{                        //const rootReducer = combineReducers({books, recommendedBooks})
        nextState[key] = reducers[key](state[key], action);
        return nextState
      }, {}
    )
  }
}
