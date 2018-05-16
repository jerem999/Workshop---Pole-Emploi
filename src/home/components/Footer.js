import React, { Component } from 'react';

class Footer extends Component {

    render() {
        return (
            <footer className='page-footer' style={{background:'#1B2B66', padding:'2%'}}>
                <div className='container'>
                    <div className='row'>
                        <div className='col l6 s12'>
                            <h5 className='white-text'>Paul Emploi</h5>
                            <p className='grey-text text-lighten-4'>La solution adaptée pour une assistance au top.</p>
                        </div>
                        <div className='col l4 offset-l2 s12'>
                            <p> 2018 Copyright Text</p>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer