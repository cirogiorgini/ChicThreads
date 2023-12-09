import React from 'react'
import ItemList from './ItemList';

const ItemListContainer = () => {
    const saludo = {greeting:'Sea bienvenido a mi ECommerce'};
  return (
    <>
       <ItemList saludo={saludo.greeting}/> 
    </>
  )
}

export default ItemListContainer