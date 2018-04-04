import { combineReducers } from 'redux';
import { createStore } from 'redux';


const rootReducer = combineReducers({
  books: books,
  recommendedBooks: recommendedBooks
});

export const store = createStore(rootReducer);


export function books(state = [], action){
  switch (action.type) {
    case "ADD_BOOK":
      return [].concat(state, action.payload)
    case "REMOVE_BOOK":
      const idx = state.indexOf(action.payload)
      return [].concat(state.slice(0, idx), state.slice(idx + 1, state.length))
    default:
      return state
  }
}

export function recommendedBooks(state = [], action) {
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