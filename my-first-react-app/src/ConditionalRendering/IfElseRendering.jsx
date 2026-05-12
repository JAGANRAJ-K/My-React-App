import React from 'react'

const IfElseRendering = () => {
  let isHungry=true;

  if (isHungry) {
    return(
        <h1>Go and Eat Pizza🍕🍕🍕</h1>
    )
  }
  else{
    return(
        <h1>Go and Sleep😴😴😴</h1>
    )
  }
}

export default IfElseRendering