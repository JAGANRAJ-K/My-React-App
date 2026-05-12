import React, { useState } from 'react'

const ThemeChanger = () => {
    const[theme,setTheme]=useState(true);
    let themeToggle=()=>{
        setTheme(!theme);
    }
  return (
    <div style={{width:"100%",
        height:"100vh",
        margin:"0px",
        padding:"0px",
        boxSizing:"border-box",
        backgroundColor: theme==true ?"white":"black",
        color:theme==true?"black":"white"

    }}>
        <h1>Light and Dark theme Demo By ternary Operator</h1>
        <h2>{theme == true ? "Light theme":"Dark theme"}</h2>
        <button onClick={themeToggle}>Switch to {theme == true ? "Dark":"Light"} Theme</button>
    </div>
  )
}

export default ThemeChanger