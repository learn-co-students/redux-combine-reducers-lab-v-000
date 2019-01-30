export function books(state = [], action) {
    switch (action.type) {
        case "ADD_BOOK":
            return [].concat(state, action.payload)
        case "REMOVE_BOOK":
            let idx = state.indexOf(action.payload);
            return [].concat(state.splice(0, idx), state.splice(idx + 1, state.length))
        default:
            return state
    }
}

export function recommendedBooks(state = [], action) {
    switch (action.type) {
        case "ADD_RECOMMENDED_BOOK":
            return [].concat(state, action.payload)
        case "REMOVE_RECOMMENDED_BOOK":
            let idx = state.indexOf(action.payload);
            return [].concat(state.splice(0, idx), state.splice(idx + 1, state.length))
        default:
            return state
    }
}