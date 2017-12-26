import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  books: books,
  recommendedBooks: recommendedBooks
})

//export const store = createStore(rootReducer)

export function books(state = [], action) {
  switch (action.type) {
    case "ADD_BOOK":
      var book = {title: action.payload.title, author: action.payload.author}
      return state.concat(book);

    case "REMOVE_BOOK":
      return state.filter(book => book.title !== action.payload.title)
    default:
      return state
  }
}

export function recommendedBooks(state = [], action) {
  switch (action.type) {
    case "ADD_RECOMMENDED_BOOK":
      var book = {title: action.payload.title, author: action.payload.author}
      return state.concat(book);

    case "REMOVE_RECOMMENDED_BOOK":
      return state.filter(book => book.title !== action.payload.title)
    default:
      return state
  }
}
