import React from 'react'

const InlineStyling = () => {
    let jsInlineStyle={
        width:"500px",
        height:"300px",
        backgroundColor:"skyblue",
        borderRadius:"20px",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center"
    }
  return (
    <div style={jsInlineStyle}>
        <h1>Inline Styling</h1>
        <p>We can provide inline styling in react by using JS Object</p>
    </div>
  )
}

export default InlineStyling