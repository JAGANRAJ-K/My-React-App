import React, { useState } from 'react'

const Counter = () => {
    // console.log(useState());
    //!state for count variable
    let [count ,setCount]=useState(0);
    console.log("Count:",count);

    let incrementCount=()=>{
        setCount(count +1);
    }
    let decrementCount=()=>{
        setCount(count +1);
    }
    let resetCount=()=>{
        setCount(count +1);
    }
    
    
  return (
    <>
        <h1>Counter</h1>
        <h2>Count : {count}</h2>
        <button onClick={incrementCount}>Increment</button>
        <button onClick={decrementCount}>Decrement</button>
        <button onClick={resetCount}>Reset</button>
    </>
  )
}

export default Counter