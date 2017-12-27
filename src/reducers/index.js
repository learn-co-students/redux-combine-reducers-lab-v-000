import { combineReducers } from 'redux'
import books from './books_reducer'
import recommendedBooks from './recommendedBooks_reducer'


const rootReducer =  combineReducers({
  books,
  recommendedBooks
})

export default rootReducer

