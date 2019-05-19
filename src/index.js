import {books} from './reducers'
import {recommendedBooks} from './reducers'
import { combineReducers } from 'redux'
const rootReducer = combineReducers({books, recommendedBooks})