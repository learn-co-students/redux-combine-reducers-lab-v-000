import React from 'react'
import { createStore } from 'redux'
import { combineReducers } from 'redux'
import App from './App'
import { books, recommendedBooks} from './reducers'



let store = createStore(booksManger)
