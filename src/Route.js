import React from 'react'
import { Switch, Route } from'react-router-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import Store, { history } from './store/Store'
//import Dashboard from './dashboard/components/Dashboard'
import Nav from './home/components/Nav'
import Login from './home/components/Login'

export const Routes = () => {
    return (
        <Provider store={Store}>
            <ConnectedRouter history={history}>
                <div>
                    <div>
                        <Nav/>
                    </div>
                    <Switch>
                        <Route path='/' component={Login}/>
                    </Switch>
                </div>
            </ConnectedRouter>
        </Provider>
    )
}