import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import AppNavbar from './components/NavBar/AppNavbar'
import ItemListContainer from './components/ProductList/ItemListContainer'
import Cart from './components/NavBar/Carrito/Cart'



const App = () => {
  return (
    <>
    <BrowserRouter>
      
      <AppNavbar/>
    
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/carrito' element={<Cart/>}/>
      </Routes>
    
    </BrowserRouter>
      
    </> )
}

export default App




