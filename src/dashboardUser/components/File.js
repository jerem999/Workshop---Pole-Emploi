import React, { Component } from 'react'
import '../../css/file.css'

class File extends Component {
    componentDidMount() {
        this.props.timer.start()
    }

    constructor() {
        super()
        this.state = { value: 0 }
        this._increase()
    }

    _increase() {
        this.setState({ value: this.state.value + 1 })
        setTimeout(this._increase.bind(this), 1000)
    }

    stopTimer() {
        console.log(this.props.location.pathname)
        this.props.timer.stop(this.props.location.pathname)
        {/*this.props.history.push('/account/user')*/}
    }

    render() {
        console.log(this.state.value)
        if (this.state.value===10) {
            alert('Veuillez choisir un fichier à importer avant de continuer')
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
                <div className='row'>
                    <form className='col s4 offset-s4 borderForm'>
                        <p>Veuillez transmettre vos documents</p>
                        <div className='file-field input-field'>
                            <div className='btn'>
                                <span>Importer</span>
                                <input type='file' className='validate' required/>
                            </div>
                            <div className='file-path-wrapper'>
                                <input className='file-path validate' type='text' placeholder='Importer un document'/>
                            </div>
                        </div>
                        <button className='btn waves-effect waves-light' onClick={this.stopTimer.bind(this)} type='submit' name='action'>Submit
                            <i className='material-icons right'>send</i>
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default File
