import React from 'react'

const ExternalEventHandler = () => {
    //! Event Handler Function
    let greetUser=()=>{
        console.log("Learning React Js");
    }
  return (
    <div>
        <h1>External Event Handler</h1>
        <button onClick={greetUser}>Greet Me</button>
    </div>
  )
}

export default ExternalEventHandler