import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { books, recommendedBooks, combineReducers } from './reducers/reducers';

const rootReducer = combineReducers({ books, recommendedBooks});
