import React from 'react'

const StickersItem = ({img, label, onClick}) => {
    console.log(onClick);
  return (
   <li>
    <img src={img} alt={label}/>
    <p onClick={onClick}>{label}</p>
   </li>
  )
}

export default StickersItem