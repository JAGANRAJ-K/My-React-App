import React, { useState } from 'react'

const CheckBoxInput = () => {
    const [formData,setFormData]=useState(
        {
            skills:[]
        }
    );
    let {skills}=formData;
    //! Handle Input Change
    let handleInputChange=(e)=>{
        let{name,value,checked}=e.target;
        if(checked){
            //! Add the skills into array
            setFormData({...formData,skills:[...skills,value]});
        }else{
            //! Remove Skills if it's unchecked from array
            setFormData(
                {...formData,skills:skills.filter((skill)=>{
                   return skill!==value;
                })}
            );
        }
    }
    let handleSubmit=(e)=>{
        e.preventDefault();
        console.log("Skills:",skills);
        setFormData({skills:[]});
        
        
    }
    console.log("Skills after empty:",skills);
  return (
    <div>
        <h1>Handling CheckBox Input in Form</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="skills">Skills</label>
                <input type="checkbox" onChange={handleInputChange} name="skills" id="skills" value={"HTML"} checked={skills.includes("HTML")} />HTML
                <input type="checkbox" onChange={handleInputChange} name="skills" id="skills" value={"CSS"} checked={skills.includes("CSS")}/>CSS
                <input type="checkbox" onChange={handleInputChange} name="skills" id="skills" value={"JS"} checked={skills.includes("JS")} />JS
                <input type="checkbox" onChange={handleInputChange} name="skills" id="skills" value={"React"} checked={skills.includes("React")}/>React
                <input type="checkbox" onChange={handleInputChange} name="skills" id="skills" value={"SQL"} checked={skills.includes("SQL")}/>SQL
                <input type="checkbox" onChange={handleInputChange} name="skills" id="skills" value={"Java"} checked={skills.includes("Java")}/>Java
            </div>
            <div>
                <button>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default CheckBoxInput