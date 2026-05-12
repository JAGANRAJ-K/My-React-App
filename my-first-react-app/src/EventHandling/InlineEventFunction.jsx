import React from 'react'

const InlineEventFunction = () => {
  return (
    <div>
        <h1>Inline Event Function</h1>
        <button onClick={()=>{
            console.log("Button is clicked!!!!");
            alert("Hi How Are you!!!")}}>Alert Me</button>
    </div>
  )
}

export default InlineEventFunction