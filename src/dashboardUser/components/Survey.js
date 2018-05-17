import React, { Component } from 'react'
import '../../css/survey.css'

class Survey extends Component {
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
                    <form className='col s4 offset-s4 borderForm' action='#'>
                        <div className='row'>
                            <div className='col s12'>
                                <p>Avez-vous déjà travaillé?</p>
                                <p>
                                    <label>
                                        <input name='group1' type='radio' />
                                        <span>Oui</span>
                                    </label>
                                </p>
                                <p>
                                    <label>
                                        <input name='group1' type='radio' />
                                        <span>Non</span>
                                    </label>
                                </p>
                                <p>Avez-vous déjà vu Jérémy?</p>
                                <p>
                                    <label>
                                        <input name='group2' type='radio' />
                                        <span>Oui</span>
                                    </label>
                                </p>
                                <p>
                                    <label>
                                        <input name='group2' type='radio' />
                                        <span>Non</span>
                                    </label>
                                </p>
                            </div>
                        </div>
                        <button className='btn waves-effect waves-light' type='submit' name='action'>Submit
                            <i className='material-icons right'>send</i>
                        </button>
                    </form>
                </div>
        )
    }
}

export default Survey
