// src/redux/reducers/searchReducer.js

import { SET_SEARCH_RESULTS } from "../actions/searchActions"

const initialState = {
  results: [],
}

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_RESULTS:
      return {
        ...state,
        jobs: action.payload,
      }
    default:
      return state
  }
}

export default searchReducer
