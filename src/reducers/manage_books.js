export function books(state = [], action){
  switch(action.type){
    case: "ADD_BOOK":
      return [...state, action.payload];
    case: "REMOVE_BOOK":
      let idx = state.indexOf(action.payload);
      let booksCopy = [...state];
      booksCopy.splice(idx, 1);
      return booksCopy;
    default:
      return state;
  }
}


export function recommendedBooks(state = [], action) {
  switch(action.type) {
    case "ADD_RECOMMENDED_BOOK":
      return [].concat(state, action.payload);
    case "REMOVE_RECOMMENDED_BOOK":
      let idx = state.indexOf(action.payload);
      return [].concat(state.slice(0, idx), state.slice(idx+1, state.length));
    default:
      return state;
  }
}
