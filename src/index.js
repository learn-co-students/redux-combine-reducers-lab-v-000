import { rootReducer } from './src/reducers'
import { addBook, addRecommendedBook, removeBook, removeRecommendedBook } from '../src/actions';
import { combineReducers } from 'redux'

const rootReducer = combineReducers({books, recommendedBooks})
