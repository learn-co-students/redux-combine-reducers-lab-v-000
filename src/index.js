import React from 'react';
import ReactDom from 'react';
import {combineReducers} from '.reducers';
import {books, recommendedBooks} from './reducers';

const rootReducer = combineReducers(books, recommendedBooks);