import React, { useState } from 'react'

const Form2 = () => {

    //! State for form data
    const[formData,setFormData]=useState(
        {
            username:"",
            email:"",
            password:"",
            confirmPassword:""
        }
    );
    //! Handle Input Change
    const handleInputChange=(e)=>{
        let{name,value}=e.target;
        setFormData({...formData,[name]:value});
    }
    //! Handle Submit function
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("FormData:",formData);
        console.log("Form Submitted✅");  
        setFormData({
            username:"",
            email:"",
            password:"",
            confirmPassword:""
        });
    }
  return (
    <div>
        <h1>Register Form</h1>
        <h2>Form handling by using single state (Object)</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">UserName</label>
                <input type="text" name="username" id="username" onChange={handleInputChange}  value={formData.username} className='border'/>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" onChange={handleInputChange} value={formData.email} className='border'/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" onChange={handleInputChange} value={formData.password} className='border'/>
            </div>
            <div>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" name="confirmPassword" id="confirmPassword" onChange={handleInputChange} value={formData.confirmPassword}     className='border'/>
            </div>
            <div>
                <button className='border'>Create Account</button>
            </div>

        </form>
    </div>
  )
}

export default Form2