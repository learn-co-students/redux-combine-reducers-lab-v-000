import { combineReducers } from 'redux';
import { addBook, addRecommendedBook, removeBook, removeRecommendedBook } from '../src/actions';
import { books, recommendedBooks } from '../src/reducers';

const rootReducer = combineReducers({
  books,
  recommendedBooks
});
