import React, { Component } from 'react'

class Form extends Component {

     render() {
        return (
            <div className='row'>
                <form className='col s4 offset-s4' style={{border: '1px solid lightgrey', borderRadius: '15px', marginTop: '2%'}}>
                    <div className='row'>
                        <div className='input-field col s6'>
                            <input placeholder='First Name' id='first_name' type='text' className='validate'/>
                            <label htmlFor='first_name'>First Name</label>
                        </div>
                        <div className='input-field col s6'>
                            <input placeholder='Last Name' id='last_name' type='text' className='validate'/>
                            <label htmlFor='last_name'>Last Name</label>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='input-field col s12'>
                            <input placeholder='Password' id='password' type='password' className='validate'/>
                            <label htmlFor='password'>Password</label>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='input-field col s12'>
                            <input placeholder='Email' id='email' type='email' className='validate'/>
                            <label htmlFor='email'>Email</label>
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

export default Form