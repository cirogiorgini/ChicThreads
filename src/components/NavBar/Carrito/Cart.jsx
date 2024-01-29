import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../../../context/CartContext';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import IconButton from '@mui/joy/IconButton';
import Tooltip from '@mui/joy/Tooltip';
import { FaTrash } from "react-icons/fa6";

const Cart = () => {
  const { cart, emptyCart } = useContext(CartContext);
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  }); 
  const [totalPrice, setTotalPrice] = useState(0); 

  useEffect(() => {
    setTotalPrice(precioTotal());
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const precioTotal = () => {
    return cartItems.reduce((acc, prod) => acc + prod.price * prod.Count, 0);
  };

  const empty = () => {
    emptyCart();
    setCartItems([]);
    setTotalPrice(0);
    localStorage.removeItem('cart'); // Vacía el localStorage al vaciar el carrito
  };

  const updateCount = (id, newCount) => {
    const updatedCart = cartItems.map(item => {
      if (item.id === id) {
        return { ...item, Count: Math.max(1, newCount) };
      }
      return item;
    });
    setCartItems(updatedCart);
  };

  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Actualiza el localStorage después de eliminar el producto
  };

  return (
    <div>
      {cartItems.length === 0 ? (
        <div className='carrito-vacio'>
          <p>El carrito está vacío</p>
          <Button>
            <Link className='volver-tienda' to="/"> Volver a la tienda</Link>
          </Button>
        </div>
      ) : (
        cartItems.map(prod => (
          <article className='cart-grid' key={prod.id}>
            <section className='prod-title'>
              <img src={prod.image} alt="" />
              <h2>{prod.title}</h2>
            </section>
            <section className='prod-count'>
              <div className='item-count'>
                <Button variant="primary" onClick={() => updateCount(prod.id, prod.Count - 1)}> - </Button>
                <p>{prod.Count}</p>
                <Button variant="primary" onClick={() => updateCount(prod.id, prod.Count + 1)}> + </Button>
                <Tooltip title="Eliminar del carrito">
                  <IconButton onClick={() => removeFromCart(prod.id)}>
                    <FaTrash />
                  </IconButton>
                </Tooltip>
              </div>
            </section>
            
            <section className='prod-price'>
              <p>Precio unitario: ${prod.price}</p>
              <p>Precio total: ${prod.price * prod.Count}</p>
            </section>
          </article>
        ))
      )}
      {cartItems.length > 0 && (
        <div className='bottom-cart'>
          <h2>Precio total:${totalPrice}</h2>
          <hr />
          <div className='btns'>
            <Link className='comprar' to="/Checkout">Comprar</Link>
            <Button variant='danger'  onClick={empty}> Vaciar carrito </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
