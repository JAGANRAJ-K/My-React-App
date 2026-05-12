import React from 'react'
import Child from './Child'


//! null,boolean,undefined are the data types which are not rendered on the screen but they are passed as props to the child component and we can access them in the child component and we can also use them in the child component but they will not be rendered on the screen
const Parent = () => {
  return (
    <>
        <h1>Parent Component</h1>
        <hr />
        <Child username={"John"}
        age={22}
        status={true}
        isMarried={null}
        isChild={undefined}/>
    </>
  )
}

export default Parent