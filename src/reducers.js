export function books(state = [], action) {
  switch (action.type) {
    case 'ADD_BOOK':
      return [...state, action.payload];
    case 'REMOVE_BOOK':
      return state.filter(book => book !== action.payload);
    default:
      return state;
  }
}

export function recommendedBooks(state = [], action) {
  switch (action.type) {
    case 'ADD_RECOMMENDED_BOOK':
      return [...state, action.payload];
    case 'REMOVE_RECOMMENDED_BOOK':
      return state.filter(recommendedBook => recommendedBook !== action.payload);
    default:
      return state;
  }
}
