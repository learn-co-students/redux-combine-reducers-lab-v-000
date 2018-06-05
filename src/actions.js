export function addBook(book){
  return {
    type: "ADD_BOOK",
    payload: book
  }
}

export function addRecommendedBook(book){
  return {
    type: "ADD_RECOMMENDED_BOOK",
    payload: book
  }
}

export function removeBook(book){
  return {
    type: "REMOVE_BOOK",
    payload: book
  }
}

export function removeRecommendedBook(book){
  return {
    type: "REMOVE_RECOMMENDED_BOOK",
    payload: book
  }
}

export function books(state = [], action){
  switch (action.type) {
    case "ADD_BOOK":
      return [].concat(state, action.payload)
    case "REMOVE_BOOK":
      let idx = state.indexOf(action.payload)
      return[].concat(state.slice(0, idx), state.slice(idx+1, state.length))
    default:
      return state  
  }
}