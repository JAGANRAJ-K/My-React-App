import React from 'react'

const InlineEvent = () => {
    let handleClick=(event)=>{
        console.log(event);
        console.log(event.nativeEvent);
    }
  return (
    <div>
        <h1>Inline Event</h1>
        <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default InlineEvent