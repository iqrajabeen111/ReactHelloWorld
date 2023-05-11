import React from 'react'
interface Props{
    children:string;
    onclick:()=>void;
    color?:'primary';
}
const Button = ({children,onclick,color}:Props) => {
  return (
    <button className={'btn btn-'+color} onClick={onclick}>
      {children}
    </button>
  )
}

export default Button
