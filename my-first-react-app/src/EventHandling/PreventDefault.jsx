import React from 'react'


//! e.preventDefault();
//* This method is used to prevent the default behaviour of the form to reload the page.
//*It will stop reloading the page after submission of the form.
//?Syntax: e.preventDefault();

const PreventDefault = () => {
    let handleForm=(e)=>{
        e.preventDefault();
        console.log("Form Submitted Successfully✅");
        
    }
  return (
    <div>
        <h1>Prevent Default</h1>
        <h1>e.preventDefault() Demo</h1>
        <form onSubmit={handleForm}>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" name="" id="email" />
            </div>
            <br />
            <div>
                <label htmlFor="pass">Password:</label>
                <input type="password" name="" id="pass" />
            </div>
            <br />
            <div>
                <button onClick={handleForm}>Login</button>
            </div>
        </form>
    </div>
  )
}

export default PreventDefault