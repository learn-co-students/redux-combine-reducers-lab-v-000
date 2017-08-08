import {books, recommendedBooks} from './reducers';
import {combineReducers} from 'redux';

export const rootReducer = combineReducers({
  books,
  recommendedBooks
})
