import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../../../context/CartContext';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, emptyCart } = useContext(CartContext);
  const [cartItems, setCartItems] = useState(cart); // Estado para los elementos del carrito
  const [totalPrice, setTotalPrice] = useState(0); // Estado para el precio total

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
      {cartItems.map(prod => (
        <article key={prod.id}>
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
            <p>{prod.price}</p>
            <p>{prod.price * prod.Count}</p>
          </section>
        </article>
      ))}
      {cartItems.length > 0 && (
        <>
          <h2>Precio total:${totalPrice}</h2>
          <div>
            <Link to="/Checkout">Comprar</Link>
            <Button onClick={empty}> Vaciar carrito </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
