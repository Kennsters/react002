import React, { Component } from 'react'

class App extends Component {

    state = {
        count: 0,
    }

    // handleIncrement= () => {
    //     this.setState({ count: this.state.count + 1 })    
    // }

    // handleDecrement = () => {
    //     this.setState({ count: this.state.count - 1 })
    // }

    // handleOne = () => {
    //     this.setState({ count: this.state.count + 1 })
    // }

    // handleTwo = () => {
    //     this.setState({ count: this.state.count + 2 })
    // }

    // handleThree = () => {
    //     this.setState({ count: this.state.count + 3 })
    // }

    // handleFour = () => {
    //     this.setState({ count: this.state.count + 4 })
    // }

    // handleFive = () => {
    //     this.setState({ count: this.state.count + 5 })
    // }

    // handleReset = () => {
    //     this.setState({ count: 0 })
    // }

    handleBtnClick = event => { 
        const x = parseInt(event.target.value)
        this.setState({ count: this.state.count + x })
    }

    handleResetCount = () => {
        this.setState({ count: 0 })
    }

    render () {
        return (
            <>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleBtnClick} value={1}>1</button>
                <button onClick={this.handleBtnClick} value={2}>2</button>
                <button onClick={this.handleBtnClick} value={3}>3</button>
                <button onClick={this.handleBtnClick} value={4}>4</button>
                <button onClick={this.handleBtnClick} value={5}>5</button>
                <button onClick={this.handleResetCount}>Reset</button>
            </>
        )
    }
}

export default App1