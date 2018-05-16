import React, { Component } from 'react'

class Survey extends Component {

    render() {
        return (
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
                            <p>Avez-vous déjà vu Jérémy?</p>
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
                    <button className="btn waves-effect waves-light" type="submit" name="action" style={{background:'#1B2B66', padding:'2%', margin: '0 0 8px 0'}}>Submit
                        <i className="material-icons right">send</i>
                    </button>
                </form>
            </div>
        )
    }
}

export default Survey