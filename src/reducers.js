// have export default twice b/c only 1 function can be the default
export function books(state = [], action) {
  switch (action.type) {
    case 'ADD_BOOK': {
      // the test nested the books under obj called payload
      return state.concat(action.payload);
    }

    // how the 'REMOVE_BOOK' spread operator and slice is working
    // i.e: var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
    // idx = 3
    // fruits.slice(0, 3); #=> [ 'Banana', 'Orange', 'Lemon' ] 1st part of arr
    // fruits.slice(3 + 1); #=> [ 'Mango' ], 'Apple' was cut out b/c its @ idx 3
    // new fruits = [ 'Banana', 'Orange', 'Lemon', 'Mango' ]

    case 'REMOVE_BOOK': {
      // whats being passed in doesn't have an id, just obj info
      // the indexOf will find the pos in state arr of the obj
      // contained in the payload
      const idx = state.indexOf(action.payload);
      // spread operator loads all info in the state until the slice fn
      // arr.slice([begin[, end]]), return everything frm idx 0 - idx,
      // then state loads agains and only retuns the next idx's,
      // '+1', is how that idx gets cut out
      return [...state.slice(0, idx), ...state.slice(idx + 1)];
    }

    default: {
      return state;
    }
  }
}

export function recommendedBooks(state = [], action) {
  switch (action.type) {
    case 'ADD_RECOMMENDED_BOOK': {
      return state.concat(action.payload);
    }

    case 'REMOVE_RECOMMENDED_BOOK': {
      const idx = state.indexOf(action.payload);
      return [...state.slice(0, idx), ...state.slice(idx + 1)];
    }

    default: {
      return state;
    }
  }
}
