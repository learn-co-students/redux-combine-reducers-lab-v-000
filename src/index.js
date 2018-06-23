// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import manageBook from './reducers/manageBook';
//
// // we wrap store in a function for testing purposes
// export const configureStore = () => {
//   return createStore(manageBand, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// };
//
// let store = configureStore();
//
// ReactDOM.render(
//   <Provider store={store}>
//     <App store={store}/>
//   </Provider>,
//   document.getElementById('root')
// );

import { combineReducers } from 'redux';

const rootReducer = combineReducers({books, recommendedBooks})




// state layout
// {
//   books: books,
//   recommendedBooks: recommendedBooks
// }


// similar to Redux's provided `combineReducers()` function
// export function combineReducers(reducers) {
//   return (state = {}, action) => {
//     return Object.keys(reducers).reduce(
//       (nextState, key) => {
//         nextState[key] = reducers[key](state[key], action);
//         return nextState
//       }, {}
//     )
//   }
// }
