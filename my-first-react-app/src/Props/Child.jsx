import React from 'react'

const Child = (props) => {

    //! Here, Props=Default parameter
    //* The props default parameter is used to accept all upcoming data coming from parent component to child component in the form of object
    // console.log(props);
    // console.log(props.username);
    
  return (
    <>
        <h1>Child Component</h1>
        <h2>Username :{props.username}</h2>
        <h2>Age : {props.age}</h2>
        <h2>Is Married: {props.isMarried}</h2>
        <h2>Is Child : {props.isChild}</h2>
        <h2>Status : {props.status}</h2>
    </>
  )
}

export default Child