const initialState = {
  favourites: {
    content: [],
  },
}

const mainReducer = (state = initialState, action) => {
  console.log(state)
  switch (action.type) {
    case "ADD_TO_FAVOURITES":
      return {
        ...state,
        favourites: {
          ...state.favourites,
          content: [...state.favourites.content, action.payload],
        },
      }
    case "REMOVE_FROM_FAVOURITES":
      return {
        ...state,
        favourites: {
          ...state.favourites,
          content: state.favourites.content.filter(
            (company) => company !== action.payload
          ),
        },
      }
    default:
      return state
  }
}

export default mainReducer
