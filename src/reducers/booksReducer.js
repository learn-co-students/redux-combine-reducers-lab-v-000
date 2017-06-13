export default function booksReducer(state, action) {
    switch (action.type) {
        case "ADD_BOOK":
            return state.concat(action.book);
    }
}