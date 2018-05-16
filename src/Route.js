import React from 'react'
import { Switch, Route } from'react-router-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import Store, { history } from './store/Store'
import DashboardUser from './dashboard/components/DashboardUser'
import DashboardAdmin from './dashboard/components/DashboardAdmin'
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
                        <Route exact path='/' component={Login}/>
                        <Route path='/account/user' component={DashboardUser}/>
                        <Route path='/account/admin' component={DashboardAdmin}/>
                    </Switch>
                </div>
            </ConnectedRouter>
        </Provider>
    )
}