import React, { useState, useContext } from 'react'
import Button from 'react-bootstrap/Button';
import { BsCartPlus } from "react-icons/bs";


const ItemCount = ({Count, restar, add, addToCart}) => {
   


   return (
    <>
      <div className='item-count'>
          <Button variant="primary" onClick={restar}> - </Button>
          <p>{Count}</p>
          <Button variant="primary" onClick={ add}> + </Button>
      </div>
      <Button variant="primary" onClick={addToCart}> Agregar al carrito <BsCartPlus /> </Button>
    </>
  )
}

export default ItemCount