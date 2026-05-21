import React, { useContext } from 'react'
import { ThemeContext } from '../ThemeProvider';

const Navbar = () => {

    //! Use or Consume the Context
  let data=  useContext(ThemeContext);
  console.log(data);
  let{theme,toggleTheme}=data;
  

  return (
    <div className={`w-full h-20 ${theme?"bg-black text-white border b-2 border-b-white":" bg-amber-300"}  flex justify-between items-center px-10 shadow-xl`}>
        <aside>
            <h1 className='text-2xl font-semibold'>Navbar Component</h1>
            <h2>{theme?"Dark":"Light"} Theme</h2>
        </aside>
        <nav>
            <button onClick={toggleTheme} className={`${theme?"bg-black text-white border b-2 border-b-white":" bg-white"} px-8 py-2 rounded text-lg cursor-pointer font-semibold`}>{theme?"dark":"Light"}</button>
        </nav>
    </div>
  )
}

export default Navbar