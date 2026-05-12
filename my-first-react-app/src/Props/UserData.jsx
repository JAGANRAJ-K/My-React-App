import React from 'react'
import UserDisplay from './UserDisplay'

const UserData = () => {
     let userDetails={
        name:"John",
        salary:25000,
        role:"Admin",
        address:{
            city:"Chennai",
            pincode:123456
        }
    }
    //!
    let displayMsg=()=>{
        let userInput=confirm("Are you really interested to learn React.js?");
        if(userInput===true){
            alert("Ok then why you're not responding?");
        }else{
            alert("Thank you for your reply");
        }
    };
  return (
    <>
   <h1>Userdata</h1>
   <hr />
   <UserDisplay 
   userDetails={userDetails}
   displayMsg={displayMsg}
   />
    </>
  )
}

export default UserData