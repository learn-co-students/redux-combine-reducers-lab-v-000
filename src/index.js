
import React from 'react';
import ReactDom from 'react';
import {books, recommendedBooks, combineReducers} from '.bookReducers';

const rootReducer = combineReducers(books, recommendedBooks);
