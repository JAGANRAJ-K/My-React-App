import React, { useState } from 'react'

const CounterWithFunction = () => {
    let {count,setCount}=useState(0);
  return (
    <>
    <h1>Counter With Function</h1>
    <h2>Count:{count}</h2>
    <button onClick={()=>{setCount(count+1)}}>Increment Count</button>
    </>
  )
}

export default CounterWithFunction