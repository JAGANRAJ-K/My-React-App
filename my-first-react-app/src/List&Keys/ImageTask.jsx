import React from 'react'

const ImageTask = () => {
    let pathStore=["../../public/image1.png","../../public/image2.png","../../public/image3.png"];
  return (
    <>
    <h1>Image Task</h1>
    {pathStore.map((path,index)=>{
        return <div key={index}>
            <h1>{index}</h1>
            <img src={path} alt="image" width={300} height={300}/>
            </div>
    })}
    </>
  )
}

export default ImageTask