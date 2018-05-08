 import { combineReducers } from 'redux';
 import { books } from './reducers';
 import { recommendedBooks } from './reducers'

// import { createStore } from 'redux';
//
// const rootReducer = combineReducers({
//   books, recommendedBooks
// })
//
// export const store = createStore(rootReducer)
const rootReducer = combineReducers({books, recommendedBooks})
