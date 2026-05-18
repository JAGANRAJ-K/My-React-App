import React from 'react'

const StudentDisplay = (props) => {
    console.log("Data coming from Student Form Component:",props);
    //! Destructuring of  a formdata(student1)
    let {studentData}=props;
    console.log(studentData);

    //!Delete data by index in table 
    const deleteDataInTable=(dataIndex)=>{
        const updatedData = studentData.filter((_, index) => index !== dataIndex);
        props.onDelete(updatedData);
    }
    
  return (
    <div>
        <h1 className='text-center text-3xl font-semibold mb-3'>Student Display</h1>
        <table className='border p-4 w-full'>
           <tr>
            <th className='border text-center p-2'>SNo</th>
            <th className='border text-center p-2'>First Name</th>
            <th className='border text-center p-2'>Last Name</th>
            <th className='border text-center p-2'>Email</th>
            <th className='border text-center p-2'>Phone Number</th>
            <th className='border text-center p-2'>Gender</th>
            <th className='border text-center p-2'>DOB</th>
            <th className='border text-center p-2'>Skills</th>
            <th className='border text-center p-2'>City</th>
            <th className='border text-center p-2'>Address</th>
            <th className='border text-center p-2'>Delete</th>
           </tr>
           {
            studentData.map((student,index)=>{
                return(
                    <tr className='border bg-amber-200 mb-2' key={index}>
                        <td className='border text-center p-2'>{index+1}</td>
                        <td className='border text-center p-2'>{student.firstName}</td>
                        <td className='border text-center p-2'>{student.lastName}</td>
                        <td className='border text-center p-2'>{student.email}</td>
                        <td className='border text-center p-2'>{student.phoneNumber}</td>
                        <td className='border text-center p-2'>{student.gender}</td>
                        <td className='border text-center p-2'>{student.dob}</td>
                        <td className='border text-center p-2'><ol>{student.skills.map((skill,index)=>{
                            return (<li>{index+1}-{skill}</li>)
                        })}</ol></td>
                        <td className='border text-center p-2'>{student.city}</td>
                        <td className='border text-center p-2'>{student.address}</td>
                        <td className='border text-center p-2'><button onClick={()=>deleteDataInTable(index)} className='bg-gray-400 text-black py-1 px-2 rounded-lg cursor-pointer'>delete</button></td>
                    </tr>
                )
            })
           }
        </table>
    </div>
  )
}

export default StudentDisplay