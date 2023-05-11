import React, { useState } from 'react'
interface Props{
    title:string;
    setitem:string;
    clickHandler:(name:string)=>void;
}

const Add = ({title,clickHandler,setitem}:Props) => {
    const [name,setName]=useState('');//for edit 
    // let val=setitem != '' ? setitem : name;
      // console.log(name,'abc');
      
  return (
   
    <div className="input-group">
       <h1>{title}</h1>
    <input type="text" className="form-control" placeholder="Recipient's username" aria-describedby="basic-addon2"  onChange={(e) => setName(e.target.value)}/>
    <button className='btn btn-primary' onClick={()=>clickHandler(name)} >
   Add
    </button>
  </div>
  )
}

export default Add
