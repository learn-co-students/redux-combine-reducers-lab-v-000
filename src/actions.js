//add a book to key that holds all recommendedBooks
// Remove a book form list of all recommendedBooks
// Add book to list of recommendedBooks
// Remove book from list of recommendedBooks

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
