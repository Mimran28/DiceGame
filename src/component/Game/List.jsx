import React from 'react'
import './style2.css'
function List({num,selectNum,onClick,setError}) {
 
  return (
    <div onClick={()=>{
      onClick(num)
      setError('')
      }} className={selectNum === num? 'listItem active':'listItem'}>
        <p>{num}</p>
    </div>
  )
}

export default List