import { combineReducers } from 'redux';

// export function combineReducers(reducers){
//   return (state = {}, action) => {
//     return Object.keys(reducers).reduce(
//       (nextState, key)=>{
//         nextState[key] = reducers[key](state[key], action);
//         return nextState
//       }, {}
//     )
//   }
// }


const rootReducer = combineReducers({books, recommendedBooks})
