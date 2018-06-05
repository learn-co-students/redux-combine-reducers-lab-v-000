
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  books: books,
  recommendedBooks: recommendedBooks
});

export const store = createStore(rootReducer);
