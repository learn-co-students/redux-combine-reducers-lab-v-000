
import {books, recommendedBooks} from './reducers'
import {combineReducers} from 'redux';

const roodReducer = combineReducers({books, recommendedBooks})
