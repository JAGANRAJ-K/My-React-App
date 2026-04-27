import React from 'react'


//!1. JSX Expression must have one parent element.
//! It will return single HTML element(node).
//! Traditionally we are using the <div></div> element as wrapper.
const Rule1 = () => {
  return (
    <div>
        <div>Rule1 Content</div>
        <div>More Rule1 Content</div>
    </div>
  )
}

export default Rule1