import React, { Component } from 'react'

export default class CounterWithClass extends Component {
    constructor(props){
        super(props);
        // console.log(this); current instance of the class-Counter with class
        this.state={
            count:0
        };
        
    }
    incrementCount=()=>{
        this.setState({count:this.state.count+1});
    };
  render() {
    return (
      <>
        <h1>Counter With Class</h1>
        <h2>Count:{this.state.count}</h2>
        <button onClick={this.incrementCount}>Increment Count</button>
      </>
    )
  }
}
