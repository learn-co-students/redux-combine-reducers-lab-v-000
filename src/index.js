import {books, recommendedBooks} from './reducers'
import {combineReducerseducer} from 'redux'

const rootReducer = combineReducers({books, removeRecommendedBook})
