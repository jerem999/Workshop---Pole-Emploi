import React, { Component } from 'react'
import '../../css/nav.css'

class Nav extends Component {
    componentDidMount() {
        this.props.timer.start()
    }

    stopTimer() {
        this.props.history.push('/account/user')
        this.props.timer.stop()
    }

    render() {
        return (
            <nav>
                <div className='nav-wrapper nav-bar'>
                    <a href='#' className='brand-logo center'><img className='responsive-img logo-center' src='images/logoPopol.png'/></a>
                    <ul id='nav-mobile' className='left hide-on-med-and-down'>
                        <li><a className='nav-color-text' href='#account/user' onClick={this.stopTimer.bind(this)}>Retour</a></li>
                    </ul>
                    <ul id='nav-mobile' className='right hide-on-med-and-down'>
                        <li><a className='nav-color-text' href='#' >Déconnexion</a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Nav
