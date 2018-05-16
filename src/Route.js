import React from 'react'
import { Switch, Route } from'react-router-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import Store, { history } from './store/Store'
import DashboardUser from './dashboardUser/components/DashboardUser'
import DashboardAdmin from './dashboardAdmin/components/DashboardAdmin'
import Nav from './home/components/Nav'
import Login from './home/components/Login'
import Footer from './home/components/Footer'
import Files from './dashboardUser/components/File'
import Form from './dashboardUser/components/Form'
import Survey from './dashboardUser/components/Survey'

let time
const timer = {
    start: () => {
        time = Date.now()
    },
    stop: () => {
        const finalTime = new Date(Date.now() - time)
        const res = {
            minutes: finalTime.getMinutes(),
            seconds: finalTime.getSeconds()
        }
        console.log(res)
        time = Date.now()
    }
}

export const Routes = () => {
    return (
        <Provider store={Store}>
            <ConnectedRouter history={history}>
                <div>
                    <div>
                        <Route path='*' render={props => (<Nav timer={timer} {...props}/>)}/>
                    </div>
                    <Switch>
                        <Route path='/' exact component={Login}/>
                        <Route path='/account/user' exact render={props => (<DashboardUser timer={timer} {...props}/>)}/>
                        {/*<Route path='/account/user' component={DashboardUser}/>*/}
                        <Route path='/account/admin' component={DashboardAdmin}/>
                        <Route path='/account/user/file' component={Files}/>
                        <Route path='/account/user/form' component={Form}/>
                        <Route path='/account/user/survey' component={Survey}/>
                    </Switch>
                    <div>
                        <Footer/>
                    </div>
                </div>
            </ConnectedRouter>
        </Provider>
    )
}