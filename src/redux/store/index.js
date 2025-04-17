import { combineReducers, configureStore } from "@reduxjs/toolkit"
import favouritesReducer from "../reducers/favourites"
import searchReducer from "../reducers/search"

const uniqueReducers = combineReducers({
  favourites: favouritesReducer,
  search: searchReducer,
})

const store = configureStore({
  reducer: uniqueReducers,
})

export default store
