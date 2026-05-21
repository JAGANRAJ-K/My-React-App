import React, { useContext } from 'react'
import { UserContext } from './ContextProvider';

//! useContext() Hook:
//* The useContext() hook is used to access the data from the global context provider.
//* And it will accept the context object reference
//* The return type of useContext() is object.

const User1 = () => {
    //! Step:-3 Use or Consume the context
   let dataFromContext= useContext(UserContext);
   console.log("Data Coming from Context:",dataFromContext);
   let{name,role,access,noOfSystem}=dataFromContext;
   
  return (
    <div>User1 for context
        <h2>Name: {name}</h2>
        <h2>Role: {role}</h2>
        <h2>Access: <ul className='list-disc'>{access.map((a,i)=><li>{i+1}-{a}</li>)}</ul></h2>
        <h2>No Of System: {noOfSystem}</h2>
    </div>
  )
}

export default User1