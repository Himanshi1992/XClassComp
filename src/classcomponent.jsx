import React,  { Component } from "react";

class ClassComponent extends Component {
    constructor(props){
        super(props);
        this.state = { count: 0 };
    };

    handleIncrement = () => {
        this.setState((lastState) => ({
            count: lastState.count + 1
        }));
    };

    handleDecrement = () => {
        this.setState((lastState) => ({
            count: lastState.count - 1
        }));
    };

    render(){
        return (
            <div style={{ fontFamily: 'sans-serif' }}>
                <h1>Counter App</h1>
                <p>{`Count: ${this.state.count}`}</p>
                <button style={{ marginRight: '10px' }} onClick={this.handleIncrement}>Increment</button>
                <button onClick={this.handleDecrement}>Decrement</button>
            </div>
        );
    }
}
export default ClassComponent;
