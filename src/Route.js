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
import ApplicationConf from './conf/ApplicationConf'
import { toastError } from './utils/MaterializeUtil';
import { push } from 'react-router-redux'

let time
const timer = {
    start: () => {
        time = Date.now()
    },
    stop: (path) => {
        const finalTime = new Date(Date.now() - time)
        const res = finalTime.getSeconds()
        console.log(path, res)
        console.log(res)
        console.log(path)
        time = Date.now()
        if (path === '/account/user/file') {
            console.log('test')
            return (
                fetch(ApplicationConf.admin.getAverage(), {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        type : "files",
                        value : res
                    })
                })
                    .then(console.log('yes'))
                    .then(console.log('test'))
                    .catch((err) => {
                        toastError(err)
                    })
            )
        }
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
                        <Route path='/account/admin' component={DashboardAdmin}/>
                        <Route path='/account/user/file' exact render={props => (<Files timer={timer} {...props}/>)}/>
                        <Route path='/account/user/form' exact render={props => (<Form timer={timer} {...props}/>)}/>
                        <Route path='/account/user/survey' exact render={props => (<Survey timer={timer} {...props}/>)}/>
                    </Switch>
                    <div>
                        <Footer/>
                    </div>
                </div>
            </ConnectedRouter>
        </Provider>
    )
}
