import React from 'react'

const ListRendering1 = () => {
let skills=["React","Java","Python","J2EE","Django","SQL","Web Technology","Devops","Cloud Computing"];
  return (
    <>
        <h1>List Rendering in React JS</h1>
        <ol>
            {skills.map((skill,index)=>{
                return <li key={index}>{skill}</li>
            })}
        </ol>
    </>
  )
}

export default ListRendering1