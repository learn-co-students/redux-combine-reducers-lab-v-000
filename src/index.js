import {books, recommendedBooks} from './src/reducers'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({books, recommendedBooks})