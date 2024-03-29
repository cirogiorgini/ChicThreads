import React, { useState } from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import AppNavbar from './components/NavBar/AppNavbar'
import ItemListContainer from './components/ProductList/ItemListContainer'
import Cart from './components/NavBar/Carrito/Cart'
import "./main.css"
import ItemDetailContainer from './components/ProductList/ItemDetailContainer'
import { CartProvider } from './context/CartContext'
import Checkout from './components/Checkout'



const App = () => {

  

  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <AppNavbar/>
            <Routes>
              <Route path='/' element={<ItemListContainer/>}/>
              <Route path='/productos' element={<ItemListContainer/>}/>
              <Route path='/productos/:category' element={<ItemListContainer/>}/>
              <Route path='/item/:id' element={<ItemDetailContainer />}/>
              <Route path='/carrito' element={<Cart/>}/>
              <Route path='/Checkout' element={<Checkout/>}/>
            </Routes>
        </BrowserRouter>
      </CartProvider>
      
    </> )
}

export default App




