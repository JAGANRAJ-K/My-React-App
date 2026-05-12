import React from 'react'

const User = (props) => {
    let{employee1,employee2,employee3}=props;
  return (
    <>
    <h1>User Component</h1>

    <h2>Name:{employee1.eName}</h2>
    <h2>Name:{employee1.eRole}</h2>
    <h2>Name:{employee1.eAge}</h2>
    <h2>Name:{employee1.eSalary}</h2>

    <hr />
    <h2>Name:{employee2.eName}</h2>
    <h2>Name:{employee2.eRole}</h2>
    <h2>Name:{employee2.eAge}</h2>
    <h2>Name:{employee2.eSalary}</h2>

    <hr />
    <h2>Name:{employee3.eName}</h2>
    <h2>Name:{employee3.eRole}</h2>
    <h2>Name:{employee3.eAge}</h2>
    <h2>Name:{employee3.eSalary}</h2>

    </>
  )
}

export default User