import React from 'react'
import UserData from './UserData'

const UserDisplay = (props) => {
    let{name,role,salary,address:{pincode,city}}=props.userDetails;
    // console.log(props);
    let{displayMsg}=props;
    
  return (
    <div>
        <h1>User Display</h1>
        <h2>Name:{name}</h2>
        <h2>Role:{role}</h2>
        <h2>Salary:{salary}</h2>
        <h2>address:{city},{pincode}</h2>
        <hr />
        <button onClick={displayMsg}>Click for Response</button>
    </div>

  )
}

export default UserDisplay