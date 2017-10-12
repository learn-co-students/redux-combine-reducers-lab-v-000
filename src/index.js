import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { combineReducers } from 'redux';
 
const rootReducer = combineReducers({books, recommendedBooks})
