import { SET_SEARCH_RESULTS, SET_LOADING, SET_ERROR } from "../actions"

const initialState = {
  jobs: [],
  loading: false,
  error: null,
}

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case SET_SEARCH_RESULTS:
      return {
        ...state,
        jobs: action.payload,
        loading: false,
        error: null,
      }
    case SET_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export default searchReducer
