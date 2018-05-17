import React, { Component } from 'react'
import '../../css/survey.css'

class Form extends Component {
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
                        <div className='row'>
                            <div className='input-field col s6'>
                                <input id='first_name' type='text' className='validate'/>
                                <label htmlFor='first_name'>First Name</label>
                            </div>
                            <div className='input-field col s6'>
                                <input id='last_name' type='text' className='validate'/>
                                <label htmlFor='last_name'>Last Name</label>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='input-field col s12'>
                                <input id='password' type='password' className='validate'/>
                                <label htmlFor='password'>Password</label>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='input-field col s12'>
                                <input id='email' type='email' className='validate'/>
                                <label htmlFor='email'>Email</label>
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

export default Form
