export function books(state = [], action){
	switch (action.type) {
		case 'ADD_BOOK':
			return [].concat(state, action.payload)
		case 'REMOVE_BOOK':
			let idx = state.indexOf(action.payload)
			return [].concat(state.slice(0, idx),
							 state.slice(idx + 1, state.length)
							)
		default:
			return state
	}
}

export function recommendedBooks(state = [], action){
	switch (action.type) {
		case 'ADD_RECOMMENDED_BOOK':
			return [].concat(state, action.payload)
		case 'REMOVE_RECOMMENDED_BOOK':
			let idx = state.indexOf(action.payload)
			return [].concat(state.slice(0, idx),
							 state.slice(idx + 1, state.length)
							)
		default:
			return state
	}
}

/*
	The combine reducers function is returning a new reducer function that takes two arguments: 
	the state object (with a default value) and an action. Next, we need the function returned 
	from combineReducers to be able to call each of the reducers passed in as values on the 
	reducers object, calling each on the piece of the state tree that it is responsible for. 
	To do this, it will  take each key of the reducer Object and pass the piece of state stored 
	at that key to the reducer stored at that key on the reducers object
*/
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

/*
	Redux actually includes its own combineReducers function so 
	it isn't necessary to create the version above

	To use Redux's combineReducers function, just import it where needed:

	1.	import { combineReducers } from 'redux' 
	2.	const rootReducer = combineReducers({books, recommendedBooks}) 
*/
