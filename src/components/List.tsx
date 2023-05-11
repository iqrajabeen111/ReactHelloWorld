import React, { useState } from 'react'


interface  Props{

    items:string [];
    handleRemove:(index:number)=>void;
    handleedit:(index:string)=>void;
    }

const List = ({items,handleRemove,handleedit} : Props) => {

    // const [list, setList] = useState<string[]>(items);
  
    // const handleRemove = (index: number) => {
    //   setList((current) => current.filter((_, i) => i !== index));
    // };
    
    
  return (
    <div>
      
       <ul className="list-group">
        {items.map((item,index)=><li  className='list-group-item' key={index} >{item}<button onClick={()=>{handleRemove(index)}}  className='btn btn-primary'>Delete</button><button onClick={()=>{handleedit(item)}}  className='btn btn-primary'>Edit</button></li>)}
   
    </ul>
    </div>
  )
}

export default List
