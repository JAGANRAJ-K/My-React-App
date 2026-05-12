import React from 'react'

const TernaryOperator = () => {
    let isLoggedIn=true;
  return (
    <div>
        <h1>Ternary Operator</h1>
        {isLoggedIn == true ? (<h1>Welcome back User</h1>):(<h1>Go and register yourself</h1>)}
    </div>
  )
}

export default TernaryOperator