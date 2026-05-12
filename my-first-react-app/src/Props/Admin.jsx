import React from 'react'
import User from './User'

const Admin = () => {
    //! employees data
    let employee1={
        eName:"John",
        eAge:25,
        eRole:"Admin",
        eSalary:50000
    }
    let employee2={
        eName:"Smith",
        eAge:23,
        eRole:"MERN Stack Developer",
        eSalary:45000
    }
    let employee3={
        eName:"Bob",
        eAge:22,
        eRole:"Java Developer",
        eSalary:35000
    }
  return (
    <div>
        <h1>Admin Component</h1>
        <hr />
        <User
        employee1={employee1}
        employee2={employee2}
        employee3={employee3}
        />
    </div>
  )
}

export default Admin