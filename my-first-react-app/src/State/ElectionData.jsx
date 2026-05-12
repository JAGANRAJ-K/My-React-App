import React, { useState } from 'react'

const ElectionData = () => {
    let [party,setParty]=useState("DMK");
    let [cm,setCM]=useState("M.K.Stalin");
    let [seats,setSeats]=useState(58);

    let changeParty=()=>{
        setParty("TVK");
        setCM("Joseph Vijay");
        setSeats(105);
    }
  return (
    <>
    <h1>Election Results</h1>
    <hr />
    <h2>Party:{party}</h2>
    <h2>CM:{cm}</h2>
    <h2>Seats:{seats}</h2>
    <button onClick={changeParty}>Change Ruler</button>
    </>
  )
}

export default ElectionData