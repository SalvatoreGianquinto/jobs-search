export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES"
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES"
export const SET_SEARCH_RESULTS = "SET_SEARCH_RESULTS"

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

export const setSearchResults = (data) => ({
  type: SET_SEARCH_RESULTS,
  payload: data,
})

export const fetchSearchResults = (company) => {
  return (dispatch) => {
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
        console.log(error)
      })
  }
}
