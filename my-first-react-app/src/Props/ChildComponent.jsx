import React from 'react'

const ChildComponent = (props) => {

  return (
    <div>
        <h1>Child Component</h1>
        {props.children}
    </div>
  )
}

export default ChildComponent