import React, { createContext, useState } from 'react'

//! Step:-1 Create a Context API for theme
export let ThemeContext=createContext(null);

const ThemeProvider = ({children}) => {

  //! Theme Logic
  let[theme,setTheme]=useState(false);

  //! toggle Theme
  let toggleTheme=()=>{
    setTheme( !theme );
  }

  //! Provide the context
  return (
   <ThemeContext.Provider value={{theme,toggleTheme}}>
      {children}
   </ThemeContext.Provider>
  )
}

export default ThemeProvider