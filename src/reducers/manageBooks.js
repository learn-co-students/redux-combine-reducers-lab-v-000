export default function manageBooks(state = {
  books: []
}, action) {
  switch (action.type) {

    case 'ADD_BOOK':
      return Object.assign({}, state, {
        books: state.books.concat(action.book)
      });

    default:
      return state;

  }
};
