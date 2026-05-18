import React from 'react'
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import toast from 'react-hot-toast';
import{ Toaster } from 'react-hot-toast';
import { useState } from 'react';
import {IoEye,IoEyeOff} from "react-icons/io5";

const ToggleAndNotify = () => {

    const [showPassword, setShowPassword] = useState(false);

    //! Handle Password Toggle  
    const handlePasswordToggle=()=>{
        setShowPassword(!showPassword);
    }
    //! Handle Submit
    const handleSubmit=(e)=>{
        e.preventDefault();
        toast.success("Form Successfully submitted!!!");
    }
  return (
    <div className='flex flex-col w-full h-screen justify-center items-center'>
        <h1 className='text-xl font-semibold mb-4'>Password Toggle and Notifications</h1>
        <form onSubmit={handleSubmit} className='bg-indigo-600 w-1/4 px-8 py-10 shadow-2xl rounded-lg flex flex-col gap-5'>
            <div className='w-full flex flex-col gap-2 relative'>
                <label htmlFor="username" className='text-white text-lg'>UserName</label>
                <input className='block outline-none px-3 pl-8 py-2 border border-white rounded text-white caret-white' type="text" name="username" id="username" />
                <span className=' text-lg text-white absolute top-12 left-2'><FaUserAlt /></span>
            </div>
            <div className='w-full flex flex-col gap-2 relative'>
                <label htmlFor="password" className='text-white text-lg'>Password</label>
                <input className='block outline-none px-3 pl-8 py-2 border border-white rounded text-white caret-white' type={showPassword ?"text":"password"} name="password" id="password" />
                <span className=' text-lg text-white absolute top-12 left-2'><FaLock/></span>
                <span className='absolute top-12 right-2 text-white text-lg cursor-pointer' onClick={handlePasswordToggle}>
                    {showPassword ? <IoEyeOff /> : <IoEye />}
                </span>
            </div>
            <div className='flex justify-center items-center w-full'>
                <button className='bg-white text-indigo-600 font-semibold py-2 px-4 rounded cursor-pointer'>Login User</button>
            </div>
        </form>
    </div>
  )
}

export default ToggleAndNotify