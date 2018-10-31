import React, { Component } from 'react';
//import { combineReducers } from "redux";
import reducers from './reducers';

import { combineReducers } from 'redux'

const rootReducer = combineReducers({books, recommendedBooks})
