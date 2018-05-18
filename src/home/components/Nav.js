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
            <div/>
        )
    }
}

export default Nav