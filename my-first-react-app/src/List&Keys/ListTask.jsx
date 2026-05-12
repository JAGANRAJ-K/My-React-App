import React, { useState } from 'react'

const ListTask = () => {
   let[toDo,setTodo]=useState(["Complete the React-js Notes","Revise The JavaScript Concepts"]);
   let addTask=()=>{
    setTodo([...toDo,"task-3 added"]);
   }
  return (
    <>
        <h1>
            Dynamic List Task
        </h1>
        <ul>
        {toDo.map((task,index)=>{
            return <li key={index}>{task}</li>
        })}
        </ul>
        <button onClick={addTask}>Add Task</button>
    </>
  )
}

export default ListTask