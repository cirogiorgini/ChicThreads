import React from 'react'
import { pedirProductos } from '../../helpers/pedirData';
import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/config';


const ItemListContainer = () => {

  const [productos, setProductos] = useState([]);
  const category = useParams().category;

  useEffect(() => {

    const productosRef = collection(db, "productos");
    const q = category ? query(productosRef, where("category", "==", category)) : productosRef;

    getDocs(q)
      .then((resp) => {

        setProductos(
          resp.docs.map((doc) => {
            return { ...doc.data(), id: doc.id }
          })
        )
      })
      
  }, [category])




  return (
    <>
      <ItemList productos={productos} />
    </>
  )
}

export default ItemListContainer