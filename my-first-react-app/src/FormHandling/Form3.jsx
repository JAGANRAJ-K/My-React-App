import React, { useState } from 'react'

const Form3 = () => {
    //!state for userData
    const [userData,setUserData]=useState({
        username:"",
        email:"",
        gender:"",
        dob:""
    });

    //! Destructuring the userdata

    let {username,email,gender,dob}=userData;

    //! Handle Submit function
    let handleSubmit=(e)=>{
        e.preventDefault();
        console.log("UserData:",userData);
        setUserData({
            username:"",
            email:"",
            gender:"",
            dob:""
        });
    };

    //! Handle Input Change function
    let handleInputChange=(e)=>{
        let {name,value}=e.target;
        setUserData({...userData,[name]:value});
    }
  return (
    <div>
        <h1>Handling radio input</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Usename</label>
                <input onChange={handleInputChange} className='border' type="text" name="username" id="username" value={username}/>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input onChange={handleInputChange} className='border' type="email" name="email" id="email" value={email}/>
            </div>
            <div>
                <label htmlFor="gender">Gender</label>
                <input onChange={handleInputChange} type="radio" name="gender" id="gender" value={"Male"} checked={gender==="Male"}/>Male
                <input onChange={handleInputChange} type="radio" name="gender" id="gender" value={"Female"} checked={gender==="Female"}/>Female
                <input onChange={handleInputChange} type="radio" name="gender" id="gender" value={"Others"} checked={gender==="Others"} />Others
            </div>
            <div>
                <label htmlFor="dob">DOB</label>
                <input onChange={handleInputChange} type="date" name="dob" id="dob" value={dob}/>
            </div>
            <div>
                <button className='border'>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default Form3