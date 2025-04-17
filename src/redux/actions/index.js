export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES"
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES"
export const SET_SEARCH_RESULTS = "SET_SEARCH_RESULTS"
export const SET_LOADING = "SET_LOADING"
export const SET_ERROR = "SET_ERROR"

export const addToFavouritesAction = (companyName) => {
  return {
    type: ADD_TO_FAVOURITES,
    payload: companyName,
  }
}

export const removeFromFavouritesAction = (company) => {
  return {
    type: REMOVE_FROM_FAVOURITES,
    payload: company,
  }
}

export const setSearchResults = (data) => {
  return {
    type: SET_SEARCH_RESULTS,
    payload: data,
  }
}

export const setLoadingAction = () => {
  return {
    type: SET_LOADING,
  }
}

export const setErrorAction = (error) => {
  return {
    type: SET_ERROR,
    payload: error,
  }
}
export const fetchSearchResults = (company) => {
  return (dispatch) => {
    dispatch(setLoadingAction())
    fetch(`https://strive-benchmark.herokuapp.com/api/jobs?company=${company}`)
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error("Error fetching results")
        }
      })
      .then((data) => {
        dispatch(setSearchResults(data.data))
      })
      .catch((error) => {
        dispatch(setErrorAction(error))
      })
  }
}
