import { books, recommendedBooks, combineReducers } from '../src/reducers'



const addBook = "ADD_BOOK"
const removeBook = "REMOVE_BOOK"

// describe('books reducers', function() {
//
//   var projs = { title: "Professional JavaScript for Web Developers", author: "Nicholas C. Zakas" }
//   var fakeBook = { title: "None", author: "No One!" }
//   var func = { title: "Functional JavaScript", author: "Michael Fogus" }
//   var patterns = { title: "JavaScript Patterns", author: "Stoyan Stefanov" }
//
//   it('responds to the "ADD_BOOK" action by adding the book', function() {
//     let action = { type: addBook, payload: projs }
//     let state = []
//     expect(books(state, action)).toInclude(projs)
//   })
//
//   it('does not modify previous state object', function(){
//     const state = []
//     expect(books(state, { type: addBook, payload: fakeBook })).toNotEqual(state)
//   })
//
//   it('responds to the "REMOVE_BOOK" action by removing the book', function() {
//     const state = [func, patterns]
//     let action1 = { type: removeBook, payload: func }
//     let newState = books(state, action1)
//     expect(newState).toNotInclude(func)
//     let action2 = { type: removeBook, payload: patterns }
//     newState = books(newState, action2)
//     expect(newState).toNotInclude(patterns)
//   })
// })
