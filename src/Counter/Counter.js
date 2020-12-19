import React, {Component} from 'react'

export default class Counter extends Component {
    state = {
        counter: 0
    }

    addCounter = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    render() {
        return [
                <h2 key={1}>Counter {this.state.counter}</h2>,
                <button key={2} onClick={this.addCounter}>+</button>,
                <button key={3} onClick={() => this.setState({counter: this.state.counter - 1})}>-</button>
        ]
    }
}