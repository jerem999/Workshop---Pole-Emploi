import React, { Component } from 'react'
import Store from '../../store/Store'
import '../../css/login.css'

const $ = window.$

class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            login: '',
            password: ''
        }
        this.connectToken = this.connectToken.bind(this)
    }

    connectToken() {
        if (this.state.login == 'user' && this.state.password == 'user') {
            const authenticationUser = {
                login: 'user',
                password: 'user'
            }
            localStorage.setItem('user', authenticationUser.login)
            localStorage.setItem('password', authenticationUser.password)
            this.props.history.push('/account/user')
        }
        if (this.state.login == 'admin' && this.state.password == 'admin') {
            const authenticationAdmin = {
                login: 'admin',
                password: 'admin'
            }
            localStorage.setItem('user', authenticationAdmin.login)
            localStorage.setItem('password', authenticationAdmin.password)
            this.props.history.push('/account/admin')
        }
    }

    onChange(k, e) {
        const test = {}
        test[k] = e.target.value
        this.setState(test)
    }

    render() {
        return(
            <div>
                <div className='login-page row'>
                    <div>
                        <div className='col s6'>
                            <div className='row'>
                                <div className='input-field col s6 offset-s3 center'>
                                    <img className='responsive-img' src='images/logo_pole_emploi.png'/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                    <div style={{ marginBottom: '100px'}}/>
                        <div className='col s4'>
                            <div className='row s12'>
                                <form className='col s12'>
                                    <div className='row no-margin-h'>
                                        <div className='input-field col s12'>
                                            <i className='material-icons prefix .input-field label'>account_circle</i>
                                            <input id='login' type='text' className='validate' onChange={(e) => this.onChange('login', e)}/>
                                            <label htmlFor='login'>Identifiant</label>
                                        </div>
                                    </div>
                                    <div className='row no-margin-h'>
                                        <div className='input-field col s12'>
                                            <i className='material-icons prefix .input-field label'>lock_outline</i>
                                            <input id='password' type='password' className='validate' onChange={(e) => this.onChange('password', e)}/>
                                            <label htmlFor='password' className='valign-wrapper'>Mot De Passe</label>
                                        </div>
                                    </div>
                                    <div className='row no-margin-h'>
                                        <div className='col s12 center-align'>
                                            <button type='submit' className='btn waves-effect waves-light color-button' onClick={this.connectToken}>
                                                <i className='material-icons right'>send</i>
                                                Sign-In
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Login
