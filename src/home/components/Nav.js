import React, { Component } from 'react'
import '../../css/nav.css'

class Nav extends Component {
    render() {
        return (
            <nav>
                <div className='nav-wrapper nav-bar'>
                    <a href='#' className='brand-logo center'><img className='responsive-img logo-center' src='images/logoPopol.png'/></a>
                    <ul id='nav-mobile' className='left hide-on-med-and-down'>
                        <li><a className='nav-color-text'>Retour</a></li>
                    </ul>
                    <ul id='nav-mobile' className='right hide-on-med-and-down'>
                        <li><a className='nav-color-text'>Déconnexion</a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Nav