import React from 'react'
import ChildComponent from './ChildComponent'

const Parentcomponent = () => {
  return (
    <div>
        <h1>Parent Component</h1>
        <hr />      
        <ChildComponent>
            <h1>Hello from parent</h1>
            <p>Byeee!!!!</p>
        </ChildComponent>

    </div>
  )
}

export default Parentcomponent