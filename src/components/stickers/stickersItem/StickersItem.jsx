import React from 'react'
import s from "./stickersItem.module.css"
const StickersItem = ({img, label, onClick}) => {
    console.log(onClick);
  return (
   <li className={s.li}>
    <div className={s.one}>
    <img className={s.img}src={img} alt={label}/>
    </div>
    <p className={s.p}onClick={onClick}>{label}</p>
   </li>
  )
}

export default StickersItem