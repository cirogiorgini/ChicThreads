import React from 'react'
import AppNavbar from './components/AppNavBar'
import ItemListContainer from './components/ItemListContainer'



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




