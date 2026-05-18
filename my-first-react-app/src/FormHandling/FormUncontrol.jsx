import React, { useRef } from 'react'

const FormUncontrol = () => {

    //! Create reference Hook for email
    let emailRef=useRef();

    //! Create reference Hook for email
    let passwordRef=useRef();

    //! Handle Submit
    let handleSubmit=(e)=>{
        e.preventDefault();
        console.log("Email:", emailRef.current.value);
        console.log("Password:", passwordRef.current.value);
        console.log({
            email:emailRef.current.value,
            password:passwordRef.current.value
        });
        
    }
  return (
    <div>
        <h1>Welcome Back User</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email : </label>
                <input type="email" name="email" id="email" ref={emailRef} />
            </div>
            <div>
                <label htmlFor="password">Password : </label>
                <input type="password" name="password" id="password" ref={passwordRef}/>
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    </div>
  )
}

export default FormUncontrol