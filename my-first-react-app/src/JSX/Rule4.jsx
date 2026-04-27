import React from 'react'


//! 4.Use JSX Expression->{}
//* If we want to access or write the javascript code into the JSX we will use JSX Expresion.
//* And it is represented by->{}.
//! Special Note: In JSX Expression only expressions are allowed not the statements.
//* if-else,switch=>Ternary Operator
//* for loop=>map(), filter(), reduce()
const Rule4 = () => {
    let name="Jagen Raj K";
    let age =22;
  return (
    <div>
        <h1>JSX Expression</h1>
        <h2>Name:{name}</h2>
        <h2>Age:{age}</h2>
    </div>
  )
}

export default Rule4