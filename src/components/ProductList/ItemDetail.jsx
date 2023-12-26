import React from 'react'

const ItemDetail = ({item}) => {
  return (
    <div className='ItemDetail' >
        <div className='ItemIMG'>
            <img src={item.image} alt={item.title}></img>
        </div>
        <div className='Itemtext'>
            <p>{item.description}</p>
            <p>${item.price}</p>
        </div>
    </div>
  )
}

export default ItemDetail