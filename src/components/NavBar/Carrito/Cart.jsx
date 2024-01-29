import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../../../context/CartContext';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, emptyCart } = useContext(CartContext);
  const [cartItems, setCartItems] = useState(cart); 
  const [totalPrice, setTotalPrice] = useState(0); 

  useEffect(() => {
    setTotalPrice(precioTotal());
  }, [cartItems]);

  const precioTotal = () => {
    return cartItems.reduce((acc, prod) => acc + prod.price * prod.Count, 0);
  };

  const empty = () => {
    emptyCart();
    setCartItems([]);
    setTotalPrice(0);
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

