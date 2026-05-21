import React, { useEffect, useState } from 'react'

const UseEffect1 = () => {
    const [count,setCount]=useState(0);
    // useEffect(()=>{},[dependencyArray])

    //! With []
    //* If you pass the empty-[] array useEffect will run only once.
    useEffect(()=>{
        console.log("Component will rendered successfully!!!");
        console.log("Component Mounted!!!");
    },[])
    //! Without-[]
    //* If you not pass the empty -[] array useEffect will run for each and every component re-rendering.
    //* It will execute again and again because of state and props changing in the component.
    useEffect(()=>{
        console.log("Count Changed!!!");
    })
  return (
    <div>
        <h1>UseEffect() Hook</h1>
        <h2>Count : {count}</h2>
        <button onClick={()=>{setCount(count+1)}}>++</button>
        <button onClick={()=>{setCount(count-1)}}>--</button>
        <button onClick={()=>{setCount(0)}}>Reset</button>
    </div>
  )
}

export default UseEffect1