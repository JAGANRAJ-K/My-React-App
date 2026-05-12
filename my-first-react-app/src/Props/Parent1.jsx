import React from 'react'
import Child1 from './Child1'

const Parent1 = () => {
  return (
    <>
    <h1>Parent-1 Component</h1>
    <hr />
    <Child1 
    username={"john"}
    age={25}
    role={"Admin"}
    skills={["HTML","CSS","JS","React"]}
    />
    </>
  )
}

export default Parent1