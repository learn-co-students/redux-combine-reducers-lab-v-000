import React from 'react';
import { combineReducers } from 'redux';


export function books(state = [], action) {
	switch(action.type) {
		case 'ADD_BOOK':
			return [].concat(state, action.payload)
		case 'REMOVE_BOOK':
			const books = state.filter(book => book.title !== action.payload.title)
			return books
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

  // export function combineReducers(reducers){
  //   return (state = {}, action) => {
  //     return Object.keys(reducers).reduce(
  //       (nextState, key)=>{
  //         nextState[key] = reducers[key](state[key], action);
  //         return nextState
  //       }, {}
  //     )
  //   }
  // }

  const rootReducer = combineReducers({
  	books,
  	recommendedBooks
  })
