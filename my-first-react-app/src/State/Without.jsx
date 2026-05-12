import React from 'react'
import { useState } from 'react';

const Without = () => {

    let [count,setState]=useState(0);  //let or const [variable, function to update variable]=useState it is used to provide state to functional components (initial value);
    console.log(setState);
    
    //! Increment function
    let increment=()=>{
        ++count;
    }
    //! Decrement function
    let decrement=()=>{
        --count;
    }
    //! Reset function
    let reset=()=>{
        count=0;
    }
  return (
    <>
        <h1>Component without state</h1>
        <h2>Count:{count}</h2>
        <button onClick={increment}>Increment</button> &nbsp;
        <button onClick={decrement}>Decrement</button> &nbsp;
        <button onClick={reset}>Reset</button>
    </>
  )
}

export default Without