import {
	applyMiddleware,
	createStore,
	combineReducers,
} from "redux"

import { createLogger }  from "redux-logger"
import thunk from "redux-thunk"
import { composeWithDevTools } from 'redux-devtools-extension';

import dashboard from 'dashboard/reducer'
import common from 'common/reducer'

import {
	startLoader,
	endLoader,
} from 'middlewares'


const rootReducer = combineReducers({
	dashboard,
	common,
})

const middlewares = applyMiddleware(startLoader, thunk, createLogger(), endLoader)

export default createStore(rootReducer, composeWithDevTools(middlewares))