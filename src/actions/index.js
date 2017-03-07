export const addBook = (book) => {
  return {
    type: "ADD_BOOK",
    payload: book
  }
}

export const addRecommendedBook = (book) => {
  return {
    type: "ADD_RECOMMENDED_BOOK",
    payload: book
  }
}

export const removeBook = (book) => {
  return {
    type: "REMOVE_BOOK",
    payload: book
  }
}

export const removeRecommendedBook = (book) => {
  return {
    type: "REMOVE_RECOMMENDED_BOOK",
    payload: book
  }
}
