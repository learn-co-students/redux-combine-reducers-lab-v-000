export function addBook(book) {
  return { type: 'ADD_BOOK', payload: book }
}

export function addRecommendedBook(book) {
  return { type: 'ADD_RECOMMENDED_BOOK', payload: book }
}

export function removeBook(book) {
  return { type: 'REMOVE_BOOK', payload: book }
}

export function removeRecommendedBook(book) {
  return { type: 'REMOVE_RECOMMENDED_BOOK', payload: book }
}


// const fetchstuff = async () => {
//   try {
//     let user = await fetch(/users/:id).then(user => user)
//     let posts = await fetch(/posts/).then(posts => posts)
//     let username = user.username
//     console.log('got all my stuff')
//   } catch {
//     console.log('there was an error getting my stuff')
//   }
// }