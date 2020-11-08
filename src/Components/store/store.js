import {createStore,applyMiddleware} from "redux"
import cakeReducer from "../reducers/cakeReducer"
import icecreamReducer from "../reducers/icecreamReducer"
import logger from "redux-logger"
import {composeWithDevTools} from "redux-devtools-extension";


import {combineReducers} from "redux"

const rootReducer = combineReducers({
    cake:cakeReducer,
    icecream:icecreamReducer
})

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(logger)));

export default store