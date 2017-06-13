import { combineReducers } from 'redux';
import booksReducer from './booksReducer';
import recommendedBooksReducer from './recommendedBooksReducer';

const rootReducer = combineReducer({
    books: booksReducer,
    recommendedBooks: recommendedBooksReducer,
});

export const store = createStore(rootReducer);