import React, { ReactNode } from 'react'
interface Props{
    children:ReactNode;
    onclose:()=>void;
}
const Alert = ({children,onclose}:Props) => {
  return (
    <div className="alert alert-warning alert-dismissible" role="alert">
    <button onClick={onclose} type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
    <strong>Warning!</strong>{children}.
  </div>
  )
}

export default Alert
