import React, { useState } from 'react'
import StudentDisplay from './StudentDisplay';

const StudentForm = () => {


    //! State for student data
    const [studentData,setStudentData]=useState([]);

    //!State for form data
    const [formData,setFormData]=useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:"",
        phoneNumber:"",
        gender:"",
        dob:"",
        skills:[],
        city:"",
        address:""
    });
    //! handle inputChange function
    const handleInputChange=(e)=>{
        let {name,value,type,checked}=e.target;
        if(type == "checkbox"){
            
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
    }else{
        setFormData({...formData,[name]:value});
    }
}

let {firstName,lastName,email,password,confirmPassword,phoneNumber,gender,dob,skills,city,address}=formData;
    //! handle submit function
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("Student Data:",formData);
        setFormData({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:"",
        phoneNumber:"",
        gender:"",
        dob:"",
        skills:[],
        city:"",
        address:""
        });
        

        //! Add form data inside the array- Student Data
        setStudentData([...studentData,formData]);
    }

    //! handle delete function
    const handleDelete = (updatedData) => {
        setStudentData(updatedData);
    }
  return (
    <div className='flex justify-center items-center flex-col'>
        <div className='flex justify-center items-center flex-col border h-[90vh] gap-5 w-[85%]'>
        <h1 className='text-center text-3xl font-semibold'>Student Form</h1>
        <form onSubmit={handleSubmit}>
            <div className='flex justify-center items-center gap-3 mb-3'>
                <label htmlFor="firstName">First Name</label>
                <input className={"border"} type="text" onChange={handleInputChange} name="firstName" id="firstName" value={firstName} />
            </div>
            <div className='flex justify-center items-center gap-3 mb-3'>
                <label htmlFor="lastName">Last Name</label>
                <input type="text" className={"border"} onChange={handleInputChange} name="lastName" id="lastName" value={lastName}/>
            </div>
            <div className='flex justify-center items-center gap-3 mb-3'>
                <label htmlFor="email">Email</label>
                <input type="email" className={"border"} onChange={handleInputChange}name="email" id="email" value={email} />
            </div>
            <div className='flex justify-center items-center gap-3 mb-3'>
                <label htmlFor="password">Password</label>
                <input type="password" className={"border"} onChange={handleInputChange} name="password" id="password" value={password}/>
            </div>
            <div className='flex justify-center items-center gap-3 mb-3'>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" className={"border"} onChange={handleInputChange} name="confirmPassword" id="confirmPassword"  value={confirmPassword}/>
            </div>
            <div className='flex justify-center items-center gap-3 mb-3' >
                <label htmlFor="phoneNumber">Phone Number</label>
                <input type="tel" className={"border"} onChange={handleInputChange} name="phoneNumber" id="phoneNumber" value={phoneNumber} />
            </div>
            <div className='flex justify-center items-center gap-3 mb-3'>
                <label htmlFor="gender">Gender</label>
                <input type="radio" onChange={handleInputChange} name="gender" id="gender" value={"Male"} checked={gender==="Male"}/>Male
                <input type="radio" onChange={handleInputChange} name="gender" id="gender" value={"Female"}checked={gender==="Female"} />Female
                <input type="radio" onChange={handleInputChange} name="gender" id="gender" value={"Others"} checked={gender==="Others"} />Others
            </div>
            <div className='flex justify-center items-center gap-3 mb-3'>
                <label htmlFor="dob">DOB</label>
                <input className='border px-3 py-2' type="date" onChange={handleInputChange} name="dob" id="dob" value={dob}/>
            </div>
            <div className='flex justify-center items-center gap-3 mb-3'>
                <label htmlFor="skills">Skills</label>
                <input type="checkbox" onChange={handleInputChange} name="skills" id="skills" value={"SQL"} checked={skills.includes("SQL")}/>SQL
                <input type="checkbox" onChange={handleInputChange} name="skills" id="skills" value={"Java"} checked={skills.includes("Java")}/>Java
                <input type="checkbox" onChange={handleInputChange} name="skills" id="skills" value={"HTML"} checked={skills.includes("HTML")}/>HTML
                <input type="checkbox" onChange={handleInputChange} name="skills" id="skills" value={"CSS"} checked={skills.includes("CSS")}/>CSS
                <input type="checkbox" onChange={handleInputChange} name="skills" id="skills" value={"JS"} checked={skills.includes("JS")}/>JS
                <input type="checkbox" onChange={handleInputChange} name="skills" id="skills" value={"React"} checked={skills.includes("React")}/>React
            </div>
            <div className='flex justify-center items-center gap-3 mb-3'>
                <label htmlFor="city">City</label>
                <select className='border px-1 py-2' onChange={handleInputChange} name="city" id="city" value={city}>
                    <option value="">Select here</option>
                    <option value="Chennai">Chennai</option>
                    <option value="Coimbatore">Coimbatore</option>
                    <option value="Madurai">Madurai</option>
                    <option value="Trichy">Trichy</option>
                </select>
            </div>
            <div className='flex justify-center items-center gap-3 mb-3'>
                <label htmlFor="address">Address</label>
                <textarea name="address" className={"border"} onChange={handleInputChange} id="address" cols="30" rows="5" value={address}></textarea>
            </div>
            <div className='flex justify-center items-center gap-3 '>
                <button className={"rounded px-4 py-2 bg-blue-600 text-white"}>Submit</button>
            </div>
        </form>
    </div>
        <hr />
        <StudentDisplay 
        studentData={studentData}
        onDelete={handleDelete}
        />
    </div>
    
  )
}

export default StudentForm