import React from 'react'
import { Switch, Route } from'react-router-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import Store, { history } from './store/Store'
import DashboardUser from './dashboardUser/components/DashboardUser'
import DashboardAdmin from './dashboardAdmin/components/DashboardAdmin'
import Login from './home/components/Login'
import Footer from './home/components/Footer'
import Files from './dashboardUser/components/File'
import Form from './dashboardUser/components/Form'
import Survey from './dashboardUser/components/Survey'

export const Routes = () => {
    return (
        <Provider store={Store}>
            <ConnectedRouter history={history}>
                <div>
                    <Switch>
                        <Route path='/' exact component={Login}/>
                        <Route path='/account/user' exact component={DashboardUser}/>
                        <Route path='/account/admin' exact component={DashboardAdmin}/>
                        <Route path='/account/user/file' exact component={Files}/>
                        <Route path='/account/user/form' exact component={Form}/>
                        <Route path='/account/user/survey' exact component={Survey}/>
                    </Switch>
                    <div>
                        <Footer/>
                    </div>
                </div>
            </ConnectedRouter>
        </Provider>
    )
}