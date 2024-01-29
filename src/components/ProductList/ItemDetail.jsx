import React, { useContext, useState } from 'react'
import ItemCount from './ItemCount'
import { CartContext } from '../../context/CartContext';
import { FaArrowCircleLeft } from "react-icons/fa";
import Tooltip from '@mui/joy/Tooltip';
import IconButton from '@mui/joy/IconButton';
import { Link } from 'react-router-dom';


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
    <>
      <Tooltip title="Volver al menu"  style={{ padding: '2rem' }}>
        <IconButton >
          <Link to="/">
            <FaArrowCircleLeft className='flechita'/>
          </Link>
        </IconButton>
      </Tooltip>

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
    </>
  )
}

export default ItemDetail