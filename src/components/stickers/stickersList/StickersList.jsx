import React from 'react'
import StickersItem from '../stickersItem/StickersItem'

const StickersList = ({data, onClick}) => {
    console.log(onClick);
  return (
    <ul>
        {data.map(({img, label}) => {
            return <StickersItem onClick={onClick} key={label} img={img} label={label}/>
        })}
    </ul>
  )
}

export default StickersList