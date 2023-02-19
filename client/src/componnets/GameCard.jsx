import React from 'react'
import "../App.css"

export const GameCard = ({title, image,id, handleAdd}) => {
  return (
      <div>
          <img src={image} alt="game pic" className='gamecardImg' />
          <h1>{title}</h1>
          <button className='addbtn' onClick={()=>handleAdd(id)}>ADD TO CART</button>
    </div>
  )
}
