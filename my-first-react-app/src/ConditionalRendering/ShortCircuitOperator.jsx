import React from 'react'

const ShortCircuitOperator = () => {
    let heros=["Vijay","Ajith","Vikram","STR","Dhanush","KamalHassan"];
  return (
    <div>
        <h1>Conditional Rendering By Using Short Circuit Operator (&&)</h1>
      {heros.length > 0 && (
          <ul>
            {heros.map((hero,index)=>{
                return <li key={index}>{hero}</li>
            })}
        </ul>
      )}
    </div>
  )
}

export default ShortCircuitOperator