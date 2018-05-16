import React, { Component } from 'react'

class File extends Component {

    render() {
        return (
            <div className='row'>
                <form className='col s4 offset-s4' style={{border: '1px solid lightgrey', borderRadius: '15px', marginTop: '2%'}}>
                    <p>Veuillez transmettre vos documents</p>
                    <div class='file-field input-field'>
                        <div class='btn'>
                            <span>Importer</span>
                            <input type='file' multiple/>
                        </div>
                        <div class='file-path-wrapper'>
                            <input class='file-path validate' type='text' placeholder='Importer un document'/>
                        </div>
                    </div>
                    <button className='btn waves-effect waves-light' type='submit' name='action' style={{background:'#1B2B66', padding:'2%', margin: '0 0 8px 0'}}>Submit
                        <i className='material-icons right'>send</i>
                    </button>
                </form>
            </div>
        )
    }
}

export default File