import React, { useState } from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import AppNavbar from './components/NavBar/AppNavbar'
import ItemListContainer from './components/ProductList/ItemListContainer'
import Cart from './components/NavBar/Carrito/Cart'
import "./main.css"
import ItemDetailContainer from './components/ProductList/ItemDetailContainer'
import { CartContext } from './context/CartContext'



const App = () => {

  const [cart, setCart] = useState([]);

  const addToCart = (item, Count) => {
    const addedItem = {...item, Count}

    const newCart = [...cart];
    const inCart = newCart.find((item) => item.id === addedItem.id)
    if (inCart) {
      inCart.Count += Count;      
    }else {
      newCart.push(addedItem)
    }
    setCart(newCart);
  }
  const cartCount = () =>{
    return cart.reduce((acc, prod) => acc + prod.Count, 0 )
  }

  return (
    <>
    <CartContext.Provider value={{cart, addToCart, cartCount}}>
      <BrowserRouter>
        <AppNavbar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/productos' element={<ItemListContainer/>}/>
            <Route path='/productos/:category' element={<ItemListContainer/>}/>
            <Route path='/item/:id' element={<ItemDetailContainer />}/>
            <Route path='/carrito' element={<Cart/>}/>
          </Routes>
      </BrowserRouter>
    </CartContext.Provider> 
      
    </> )
}

export default App




