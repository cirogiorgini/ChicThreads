import React from 'react'
import { pedirProductos } from '../../helpers/pedirData';
import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/config';
import Loader from './Loader';


const ItemListContainer = () => {

  const [productos, setProductos] = useState([]);
  const category = useParams().category;
  const [loading, setLoading] =  useState(true)

  useEffect(() => {

    const productosRef = collection(db, "productos");
    const q = category ? query(productosRef, where("category", "==", category)) : productosRef;

    getDocs(q)
      .then((resp) => {
        setTimeout(() =>{
          setProductos(
            resp.docs.map((doc) => {
              return { ...doc.data(), id: doc.id }
            })
          )
          setLoading(false)
        }, 500)
      })
      
  }, [category])

  if(loading){
    return <Loader/>
  }


  return (
    <>
      <ItemList productos={productos} />
    </>
  )
}

export default ItemListContainer