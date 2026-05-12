import React from 'react'

const Child1 = (props) => {
    // console.log(props);
    //! Destructuring of props object
    let {username,age,role,skills}=props;
    let [a,b,c,d]=skills;

  return (
    <>
        <h1>Child-1 Component</h1>
        <h2>Username:{username}</h2>
        <h2>Age:{age}</h2>
        <h2>Role:{role}</h2>
        {/* Skills */}
        <h3>Skill-1: {a}</h3>
        <h3>Skill-2: {b}</h3>
        <h3>Skill-3 {c}</h3>
        <h3>Skill-4 {d}</h3>
    </>
  )
}

export default Child1