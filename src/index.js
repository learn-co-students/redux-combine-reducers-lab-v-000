import React from 'react';
import ReactDOM from 'react-dom';
// import { combineReducers } from 'redux';
import { combineReducers } from './reducers';
import { books, recommendedBooks } from './reducers';

const rootReducer = combineReducers({books, recommendedBooks});
