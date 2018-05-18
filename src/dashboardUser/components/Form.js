import React, { Component } from 'react'
import '../../css/survey.css'

class Form extends Component {
    constructor() {
        super()
        this.state = { value: 0 }
        this._increase()
    }
    
    _increase() {
        this.setState({ value: this.state.value + 1 })
        setTimeout(this._increase.bind(this), 1000)
    }
    
    componentDidMount() {
        this.props.timer.start()
    }

    stopTimer() {
        console.log(this.props.location.pathname)
        this.props.timer.stop(this.props.location.pathname)
        this.props.history.push('/account/user')
    }

    render() {
        console.log(this.state.value)
        if (this.state.value===10) {
            alert('remplissez')
            this.state.value = 11
        }
        if (this.state.value===20) {
            alert('hotesse')
            this.state.value = 21
        }
        return (
            <div>
                <nav>
                    <div className='nav-wrapper nav-bar'>
                        <a href='#' className='brand-logo center'><img className='responsive-img logo-center' src='images/logoPopol.png'/></a>
                        <ul id='nav-mobile' className='left hide-on-med-and-down'>
                            <li><a className='nav-color-text' href='#/account/user'>Retour</a></li>
                        </ul>
                        <ul id='nav-mobile' className='right hide-on-med-and-down'>
                            <li><a className='nav-color-text' href='#'>Déconnexion</a></li>
                        </ul>
                    </div>
                </nav>
                <div className='row'>
                    <form className='col s4 offset-s4 borderForm' name='registration' onSubmit={this.stopTimer.bind(this)}>
                        <div className='row'>
                            <div className='input-field col s6'>
                                <input id='first_name' type='text' className='validate' required/>
                                <label htmlFor='first_name'>First Name</label>
                            </div>
                            <div className='input-field col s6'>
                                <input id='last_name' type='text' className='validate' required/>
                                <label htmlFor='last_name'>Last Name</label>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='input-field col s12'>
                                <input id='password' type='password' className='validate' required/>
                                <label htmlFor='password'>Password</label>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='input-field col s12'>
                                <input id='email' type='email' className='validate' required/>
                                <label htmlFor='email'>Email</label>
                            </div>
                        </div>
                        <button className='btn waves-effect waves-light'  type='submit' name='action'>Submit
                            <i className='material-icons right'>send</i>
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Form