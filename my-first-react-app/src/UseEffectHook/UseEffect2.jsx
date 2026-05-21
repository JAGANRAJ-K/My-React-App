import React, { useEffect, useState } from 'react'

const UseEffect2 = () => {
    //! State for count1
    const[count1,setCount1]=useState(0);
    //! State for count2
    const[count2,setCount2]=useState(0);

    //! useEffect with dependency array-count-1
    useEffect(()=>{
        console.log("Count 1 Changed");
    },[count1])
    //! useEffect with dependency array-count-2
    useEffect(()=>{
        console.log("Count 2 Changed");
    },[count2])
  return (
    <div>
      <h1>UseEffect () Hook with multiple dependencies</h1>
      <h2>Count:{count1}</h2>
      <button onClick={()=>setCount1(count1+1)}>Increment</button>
      <button onClick={()=>setCount1(count1-1)}>Decrement</button>
      <hr />
      <h2>Count:{count2}</h2>
      <button onClick={()=>setCount2(count2+1)}>Increment</button>
      <button onClick={()=>setCount2(count2-1)}>Decrement</button>
    </div>
  )
}

export default UseEffect2