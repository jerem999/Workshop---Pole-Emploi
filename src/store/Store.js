import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { combineReducers, createStore, compose, applyMiddleware } from 'redux'
import createHistory from 'history/createHashHistory'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import { DashboardAdminReducer, DashboardAdminReducerStore } from '../dashboardAdmin/reducers/DashboardAdminReducer'

const reducer = combineReducers({
    DashboardAdminReducer,
    routing: routerReducer
})

export const history = createHistory()

const Store = createStore(reducer, {
        DashboardAdminReducer: DashboardAdminReducerStore
    }, compose(
        applyMiddleware(thunk, routerMiddleware(history), logger)
))

export default Store