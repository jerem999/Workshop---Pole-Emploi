import React, { Component } from 'react'
import '../../css/survey.css'

class Survey extends Component {
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
            alert('Veuillez finir de remplir le questionnaire avant de pouvoir continuer')
            this.state.value = 11
        }
        if (this.state.value===20) {
            alert('Une hôtesse à été prévenu de vos erreurs et va venir vous aider')
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
                <div className="row">
                    <form className="col s4 offset-s4" action="#" style={{border: '1px solid lightgrey', borderRadius: '15px', marginTop: '2%'}}>
                        <div className="row">
                            <div className="col s12">
                                <p>Avez-vous déjà travaillé?</p>
                                <p>
                                    <label>
                                        <input name="group1" type="radio" />
                                        <span>Oui</span>
                                    </label>
                                </p>
                                <p>
                                    <label>
                                        <input name="group1" type="radio" />
                                        <span>Non</span>
                                    </label>
                                </p>
                                <p>Êtes-vous en situation de handicap?</p>
                                <p>
                                    <label>
                                        <input name="group2" type="radio" />
                                        <span>Oui</span>
                                    </label>
                                </p>
                                <p>
                                    <label>
                                        <input name="group2" type="radio" />
                                        <span>Non</span>
                                    </label>
                                </p>
                            </div>
                        </div>
                        <button className="btn waves-effect waves-light" onClick={this.stopTimer.bind(this)} type="submit" name="action" style={{background:'#1B2B66', padding:'2%', margin: '0 0 8px 0'}}>Submit
                            <i className="material-icons right">send</i>
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Survey
