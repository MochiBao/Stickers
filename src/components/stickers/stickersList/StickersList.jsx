import React from 'react'
import StickersItem from '../stickersItem/StickersItem'
import s from "./stickersList.module.css"

const StickersList = ({data, onClick}) => {
    console.log(onClick);
  return (
    <ul className={s.ul}> 
        {data.map(({img, label}) => {
            return <StickersItem  onClick={onClick} key={label} img={img} label={label}/>
        })}
    </ul>
  )
}

export default StickersList