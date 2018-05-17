import React, { Component } from 'react'
import Store from'../../store/Store'
import { push } from 'react-router-redux'

class DashboardUser extends Component {
    constructor(props){
        super(props)
            this.state = {
                nbclics: 0
            }
        this.incrementNbClic = this.incrementNbClic.bind(this)
    }

    incrementNbClic() {
        if (this.state.nbclics >= 10) {
            alert('Veuillez finir de completer avant de valider')
        }
        this.setState(prevState => {
            return {
                nbclics: prevState.nbclics + 1
            }
        })
    }

    redirect(url) {
        Store.dispatch(push(url))
    }

    startTimer() {
        this.props.timer.start()
    }

    render() {
        return (
            <div className='App'>
                <nav>
                    <div className='nav-wrapper nav-bar'>
                        <a href='#' className='brand-logo center'><img className='responsive-img logo-center' src='images/logoPopol.png'/></a>
                        <ul id='nav-mobile' className='right hide-on-med-and-down'>
                            <li><a className='nav-color-text' href='#'>Déconnexion</a></li>
                        </ul>
                    </div>
                </nav>
                <div className='row'>
                    <div className='col s4 offset-s4 menu'>
                        <a className='waves-effect waves-light btn-large col s12' style={{background:'#1B2B66', margin:'10% auto 10% auto'}} href='#account/user/form'>Complétez votre formulaire</a>
                        <a className='waves-effect waves-light btn-large col s12' style={{background:'#1B2B66', margin:'0 auto 0 auto'}} href='#account/user/file'>Importez vos fichiers</a>
                        <a className='waves-effect waves-light btn-large col s12' style={{background:'#1B2B66', margin:'10% auto 10% auto'}} href='#account/user/survey'>Répondez à notre questionnaire</a>
                        <a className='waves-effect waves-light btn-large col s12' style={{background:'#1B2B66', margin:'10% auto 10% auto'}} onClick={ () => {
                            this.startTimer.bind(this)
                            this.incrementNbClic()
                        } }>Test</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default DashboardUser