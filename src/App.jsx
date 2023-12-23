import React from 'react'
import AppNavbar from './components/AppNavBar'
import {BrowserRouter, Route, Routes } from "react-router-dom"
import ItemListContainer from './components/ItemListContainer'
import CartWidget from './components/CartWidget'


const App = () => {
  return (
    <>
    <BrowserRouter>
      
      <AppNavbar/>
    
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/carrito' element={<CartWidget/>}/>
      </Routes>
    
    </BrowserRouter>
      
    </> )
}

export default App




