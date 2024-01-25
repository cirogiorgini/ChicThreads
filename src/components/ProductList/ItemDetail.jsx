import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({item}) => {
  return (
    <div className='ItemDetail' >
        <div className='ItemIMG'>
            <img src={item.image} alt={item.title}></img>
        </div>
        <div className='Itemtext'>
            <p>{item.description}</p>
            <p>${item.price}</p>
            <ItemCount />
        </div>
    </div>
  )
}

export default ItemDetail