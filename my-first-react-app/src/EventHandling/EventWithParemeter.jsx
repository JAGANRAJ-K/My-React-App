import React from 'react'

const EventWithParemeter = () => {
    //!Event with Paremeter
    let launchRocket=(name)=>{
        console.log(`${name} has pressed the wrong button🚀🚀🚀`);
    };
  return (
    <div>
        <h1>Event With Parameter</h1> 
        <button onClick={()=>{launchRocket("Jagan")}}>Launch Rocket🚀🚀🚀</button>
    </div>
  )
}

export default EventWithParemeter