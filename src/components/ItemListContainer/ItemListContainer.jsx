import React from 'react'
import { useState,useEffect } from 'react';
import ItemList from './ItemList';


const ItemListContainer = () => {
    const productData = useEffect(()=>{
      fetch('https://fakestoreapi.com/products')
              .then(res=>res.json())
              .then(json=>console.log(json))
      },[])
     
  return (
    <>
    <ItemList productData />
    </>
  )
}

export default ItemListContainer