import { combineReducers, configureStore } from "@reduxjs/toolkit"
import favouritesReducer from "../reducers/favourites"

const uniqueReducers = combineReducers({
  favourites: favouritesReducer,
})

const store = configureStore({
  reducer: uniqueReducers,
})

export default store
