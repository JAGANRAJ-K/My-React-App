import React, { useContext } from 'react'
import ThemeChanger from '../../ConditionalRendering/ThemeChanger';
import { ThemeContext } from '../ThemeProvider';

const MainContent = () => {
    let {theme} = useContext(ThemeContext);
  return (
    <div className='w-full h-125 flex justify-center items-center'>
        <aside className={`w-1/4 h-full ${theme?"bg-black text-white border b-2 border-b-white":" bg-blue-300"} flex justify-center items-center`}>
            <h1 className='font-semibold text-2xl'>SideBar</h1>
        </aside>
        <section className={`w-3/4 h-full ${theme?"bg-black text-white border b-2 border-b-white":" bg-red-300"} flex justify-center items-center`}>
            <h1 className='font-semibold text-3xl'>Main Content</h1>
        </section>
    </div>
  )
}

export default MainContent