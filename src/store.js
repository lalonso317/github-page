import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"

import listReducer from "./reducers/Reducer"


const rootReducer = combineReducers({
  listReducer

})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
