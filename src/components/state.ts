import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { isProduction } from './app.utils'
import { playerReducer } from './state.player.reducers'
import { threeReducer } from './state.three.reducers'

const rootReducer = combineReducers ({
    'player': playerReducer,
    'three': threeReducer,
})

let middleware: any = [thunk]

if (!isProduction ()) {

    middleware = [...middleware, logger]
    
}

export const state = createStore (rootReducer, applyMiddleware (...middleware))
