import React, { Fragment, useState } from 'react'

interface  Props{

items:string [];
heading:string;
onselectitem:(item:string)=>void;

}

// export default function ListGroup(Props:Props) {
export default function ListGroup({items,heading,onselectitem} : Props) {
    // let items = ["Pakistan", "India", "Japan", "Nw York", "Australia", "Canada"];
    //  items = [];
    //  if(items.length === 0)
    //  return(<>  <h1>List Group</h1> <p>No Record Found</p></>);
    let message=items.length === 0 ? <p>No Record Found</p> : null;
    const handleclick=(event:MouseEvent)=>console.log(event);
    // let selectedindex=0;
    // const [name,setname]=useState('');
    const [selectedindex,setselectedindex]=useState(-1);//bydefalt -1 hy mtlb koi index nai seleted list ka
    // onClick={()=>console.log(item,index) }
return (

<Fragment>
    <h1>{heading}</h1>
    {/* {message } */}
    {items.length === 0 && <p>No Record Found</p> }
    
    <ul className="list-group">
        {items.map((item,index)=><li className={selectedindex===index ? 'list-group-item active': 'list-group-item'} key={item} 
        onClick={()=>
            {setselectedindex(index);onselectitem(item);}
        }>{item}</li>)}
       
    </ul>
</Fragment>
)
}
