import { combinedReducers } from 'redux';
import { createStore } from 'redux';

const rootReducer = combinedReducers({books, recommendedBooks})

export default createStore(rootReducer);
