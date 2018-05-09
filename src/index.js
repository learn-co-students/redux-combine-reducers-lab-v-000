import { combineReducers } from 'redux';
import { books, recommendedBooks } from './reducers';

const rootReducer = combineReducers({books, recommendedBooks})
