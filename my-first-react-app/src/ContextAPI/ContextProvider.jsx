import React, { createContext } from 'react'
import User1 from './User1';

//!Step:-1 Create a Context
export let UserContext = createContext(null);
// console.log(UserContext);
const ContextProvider = () => {

    let userData={
        name:"John",
        role:"admin",
        access:["read","write","permission"],
        noOfSystem:2,
    }
  return ( <UserContext.Provider value={userData}>
    <User1/>
  </UserContext.Provider>
  );
}

export default ContextProvider