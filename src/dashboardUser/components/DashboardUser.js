import React, { Component } from 'react'
import Store from'../../store/Store'
import { push } from 'react-router-redux'
import '../../css/dashboardUser.css'

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

    startTimer() {
        this.props.timer.start()
    }

    render() {
        return (
                <div className='row'>
                    <div className='col s4 offset-s4 borderForm'>
                        <a className='waves-effect waves-light btn-large col s12 first' onClick={ () => this.startTimer.bind(this) } href='#account/user/form'>Complétez votre formulaire</a>
                        <a className='waves-effect waves-light btn-large col s12 second' onClick={ () => this.startTimer.bind(this) } href='#account/user/file'>Importez vos fichiers</a>
                        <a className='waves-effect waves-light btn-large col s12 third' onClick={ () => this.startTimer.bind(this) } href='#account/user/survey'>Répondez à notre questionnaire</a>
                        <a className='waves-effect waves-light btn-large col s12 last' onClick={ () => {
                            this.startTimer.bind(this)
                            this.incrementNbClic()
                        } }>Test</a>
                    </div>
                </div>
        )
    }
}

export default DashboardUser
