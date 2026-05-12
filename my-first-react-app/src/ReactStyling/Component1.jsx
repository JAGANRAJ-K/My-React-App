import React from 'react'
import Styles from "./Style1.module.css";

const Component1 = () => {
  return (
    <div>
        <h1 className={Styles.head1}>Component-1</h1>
        <button className={Styles.btn1}>Button-1</button>
    </div>
  )
}

export default Component1