import React from 'react'
import "../App.css"

export const CartCard = ({title, image, handleRemove, id}) => {
  return (
    <div>
      <img src={image} alt="pic" className="gamecardImg" />
      <h1>{title}</h1>
      <button className="addbtn" onClick={() => handleRemove(id)}>
        Remove Item
      </button>
    </div>
  );
}
