import React from 'react'
import Styles from "./Style2.module.css";
const Component2 = () => {
    console.log(Styles);
    
  return (
    <div>
        <h1 className={Styles.head2}>Component-2</h1>
        <button className={Styles.btn2}>Button-2</button>
    </div>
  )
}

export default Component2