import React, { useContext } from 'react'
import { ThemeContext } from '../ThemeProvider';

const Footer = () => {
    let{theme}=useContext(ThemeContext);
  return (
    <div className={`w-full h-[calc(100vh-580px)] ${theme?"bg-black text-white border b-2 border-b-white":"bg-green-300"} flex justify-center items-center`}>
        <h1 className='font-semibold text-2xl'>Footer Component</h1>
    </div>
  )
}

export default Footer