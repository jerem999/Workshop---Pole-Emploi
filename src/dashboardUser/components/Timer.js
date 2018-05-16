import React, { Component } from 'react'

class Timer extends Component {
    constructor (props) {
        super(props)
        this.state = {count: 0}
    }
    componentWillUnmount () {
        clearInterval(this.timer)
    }
    tick () {
        this.setState({count: (this.state.count + 1)})
    }
    startTimer () {
        clearInterval(this.timer)
        this.timer = setInterval(this.tick.bind(this), 1000)
    }
    stopTimer () {
        clearInterval(this.timer)
    }
    render () {
        return (
            <div className='timer'/>
        )
    }
}

export default Timer