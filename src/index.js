import { combineReducers } from 'redux'
import books from './reducers/booksReducer'
import recommendedBooks from './reducers/recommendedBooksReducer'

const rootReducer = combineReducers({
books,
recommendedBooks
})
