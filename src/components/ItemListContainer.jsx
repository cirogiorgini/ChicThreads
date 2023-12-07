import React from 'react'
import AppNavbar from './AppNavBar'

const ItemListContainer = () => {
    const saludo = "Sea Bienvenido a mi Ecommerce"
  return (
    <>
       <AppNavbar
            greeting={saludo}
       /> 
    </>
  )
}

export default ItemListContainer