import React, { Component } from 'react'
import '../../css/file.css'

class File extends Component {
  componentDidMount() {
        this.props.timer.start()
    }

    stopTimer() {
        console.log(this.props.location.pathname)
        this.props.timer.stop(this.props.location.pathname)
        this.props.history.push('/account/user')
    }

    render() {
        return (
                <div className='row'>
                    <form className='col s4 offset-s4 borderForm'>
                        <p>Veuillez transmettre vos documents</p>
                        <div className='file-field input-field'>
                            <div className='btn'>
                                <span>Importer</span>
                                <input type='file' multiple/>
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
        )
    }
}

export default File
