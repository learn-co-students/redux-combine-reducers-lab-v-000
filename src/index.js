import { combineReducers } from 'redux';
//Wouldn't I also need to import the reducers?
import {books, recommendedBooks} from './reducers'
 
const rootReducer = combineReducers({books, recommendedBooks})
