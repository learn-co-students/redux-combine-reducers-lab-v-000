import { books, recommendedBooks } from './reducers'
import { combineReducers } from 'redux'
 
const rootReducer = combineReducers({books, recommendedBooks})
