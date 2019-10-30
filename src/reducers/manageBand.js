
const rootReducer = combineReducers({
  books: booksReducer, 
  authors: authorsReducer
});
 
export const store = createStore(rootReducer);
 
function booksReducer(state = [], action) {
  switch (action.type) {
 
     case "ADD_BOOK":
      return state.concat(action.book);
 
    case "REMOVE_BOOK":
      const idx = state.indexOf(action.id);
      return [ ...state.slice(0, idx), ...state.slice(idx + 1) ];
 
    default:
      return state;
  }
}
 
function authorsReducer(state = [], action) {
  switch (action.type) {
 
    case "ADD_AUTHOR":
      return state.concat(action.author);
 
    case "REMOVE_AUTHOR":
      const idx = state.indexOf(action.id);
      return [ ...state.slice(0, idx), ...state.slice(idx + 1) ];
 
    default:
      return state;
  }
}
