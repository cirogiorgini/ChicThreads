import React, { useContext, useState } from 'react'
import ItemCount from './ItemCount'
import { CartContext } from '../../context/CartContext';


const ItemDetail = ({item}) => {
  const { cart, addToCart } = useContext(CartContext);
  console.log(cart);

  const [Count, setCount] = useState(1);

  const restar = () => {
      Count > 1 && setCount(Count - 1)
  }

  const add = () => {
     setCount(Count + 1)
  }

  return (
    <div className='ItemDetail' >
        <div className='ItemIMG'>
            <img src={item.image} alt={item.title}></img>
        </div>
        <div className='Itemtext'>
            <p>{item.description}</p>
            <p>${item.price}</p>
            <ItemCount 
            Count={Count}
            add={add}
            restar={restar}
            addToCart={() => { addToCart(item, Count) }} 
            />
        </div>
    </div>
  )
}

export default ItemDetail