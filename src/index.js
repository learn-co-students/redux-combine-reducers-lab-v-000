import React from 'react';
import { combineReducers } from 'redux';
import {books, recommendedBooks} from './reducers.js'

const rootReducer = combineReducers({books, recommendedBooks});
