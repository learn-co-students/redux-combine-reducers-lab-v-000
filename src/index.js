// {
//   books: books,
//   recommendedBooks: recommendedBooks
// }
//
//
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
