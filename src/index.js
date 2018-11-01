import React, { Component } from 'react';
import reducers from './reducers';
 import { combineReducers } from 'redux'
 const rootReducer = combineReducers({books, recommendedBooks})
