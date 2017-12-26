export const addBook = (book) => {
  return {
    type: 'ADD_BOOK',
    payload: {
      title: book.title,
      author: book.author
    }
  }
}

export const addRecommendedBook = (recommendedBook) => {
  return {
    type: 'ADD_RECOMMENDED_BOOK',
    payload: {
      title: recommendedBook.title,
      author: recommendedBook.author
    }
  }
}

export const removeBook = (book) => {
  return {
    type: 'REMOVE_BOOK',
    payload: {
      title: book.title,
      author: book.author
    }
  }
}

export const removeRecommendedBook = (recommendedBook) => {
  return {
    type: 'REMOVE_RECOMMENDED_BOOK',
    payload: {
      title: recommendedBook.title,
      author: recommendedBook.author
    }
  }
}
