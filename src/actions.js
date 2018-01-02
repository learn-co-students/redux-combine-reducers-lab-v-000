// export b/c want these functions to be available in other files
// using payload b/c that what learn is using a as reference
export function addBook(book) {
  return { type: 'ADD_BOOK', payload: book };
}

export function addRecommendedBook(book) {
  return { type: 'ADD_RECOMMENDED_BOOK', payload: book };
}

export function removeBook(book) {
  return { type: 'REMOVE_BOOK', payload: book };
}

export function removeRecommendedBook(book) {
  return { type: 'REMOVE_RECOMMENDED_BOOK', payload: book };
}
