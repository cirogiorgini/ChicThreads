import React from 'react'
import { pedirProductos } from '../../helpers/pedirData';
import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {
    
    const [productos, setProductos] = useState([]);
    const category = useParams().category;

    useEffect(() => {
      pedirProductos()
        .then((res) =>{
          if (category){
            setProductos(res.filter((prod) => prod.category ===category) )
          }else{
            setProductos(res)
          }
          
        } )
    },[category])




  return (
    <>
    <ItemList productos={productos} />
    </>
  )
}

export default ItemListContainer