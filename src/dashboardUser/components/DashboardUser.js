import React, { Component } from 'react'
import Timer from './Timer'

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
            alert('Arrète de t\'exciter sur ce putain de bouton')
        }
        this.setState(prevState => {
            return {
                nbclics: prevState.nbclics + 1
            }
        })
    }

    startTimer() {
        this.props.timer.start()
    }

    render() {
        return (
            <div className='App'>
                <div className='row'>
                    <div className='col s4 offset-s4 menu'>
                        <a className='waves-effect waves-light btn-large col s12' style={{background:'#1B2B66', margin:'10% auto 10% auto'}} href='#account/user/form' onClick={ () => this.startTimer.bind(this) }>Complétez votre formulaire</a>
                        <a className='waves-effect waves-light btn-large col s12' style={{background:'#1B2B66', margin:'0 auto 0 auto'}} onClick={ () => this.startTimer.bind(this) } href='#account/user/file'>Importez vos fichiers</a>
                        <a className='waves-effect waves-light btn-large col s12' style={{background:'#1B2B66', margin:'10% auto 10% auto'}} onClick={ () => this.startTimer.bind(this) } href='#account/user/survey'>Répondez à notre questionnaire</a>
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