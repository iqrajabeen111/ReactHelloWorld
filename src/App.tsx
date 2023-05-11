import React, { useState } from 'react'
import Message from './Message'
import ListGroup from './components/ListGroup'
import Alert from './components/Alert'
import Button from './components/Button'
import Add from './components/Add'
import List from './components/List'

export default function App() {
  const [alertvisible,setalertvisibility]=useState(false);
  // let items = ["Pakistan", "India", "Japan", "Nw York", "Australia", "Canada"];
  // const handleselectitem=(item:string)=>{
  //   console.log(item);
    
  // }
  const [itemsarr, setItemsArr] = useState<string[]>([]);
  const getClickHandler = (name: string) => {
    setItemsArr([...itemsarr, name]);//previous values na haty jabhi hm ne spread opeartor use kia yaha

  };
  //DELETE KI FUNCTIONALITY HAI YE
  const handleselectitem=(index:number)=>{
    setItemsArr((current) => current.filter((_, i) => i !== index));
    
  }
  const [getitem, setItem] = useState('');
  const handleedititem=(item:string)=>{
    // console.log(item);
    
    setItem(item);
    
  }
  // let itemsarr: string[] = [];
  //   const getClickHandler =(name:string)=>{
  //     itemsarr.push(name);
  //     // console.log(itemsarr);
  //   }
 
  return (
    <div>
      {/* <ListGroup items={items} heading="Cities" onselectitem={handleselectitem}/> */}
      {alertvisible &&   <Alert onclose={()=>setalertvisibility(false)}>
      Better check yourself, <h1>you're not looking too good.</h1>
      </Alert>}
   
    <Button color="primary" onclick={()=>setalertvisibility(true)}>click me.</Button>
    <div className='row  col-md-4'> <Add title="Add Name" clickHandler={getClickHandler } setitem={getitem}/></div>
     <List  items={itemsarr} handleRemove={handleselectitem}  handleedit={handleedititem} />
    </div>
  )
}
