import React, { useContext } from 'react'
import { CartContext } from '../../../context/CartContext';
import Button from 'react-bootstrap/Button';
const Cart = () => {

  const {cart, precioTotal, emptyCart} = useContext(CartContext)

  const empty = () => {
    emptyCart();
  }


  return (
    <div>
        {
          cart.map((prod) => (
            
              <article key={prod.id}>
                <section className='prod-title'>
                  <img src={prod.image} alt="" />
                  <h2>{prod.title}</h2>
                </section>
                <section className='prod-count'>
                    <Button> + </Button>
                    <p>{prod.Count}</p>
                    <Button> - </Button>
                </section>
                <section className='prod-price'>
                    <p>{ prod.price}</p>
                    <p>{prod.price * prod.Count}</p>
                </section>
              </article>
              
              ))
        }
        {
          cart.length > 0 &&
          <>
            <h2>Precio total:${precioTotal()}</h2>
            <div>
              <Button>Comprar</Button>
              <Button onClick={empty}> Vaciar carrito </Button>
            </div>

          </>
        }
       
    </div>
  )
}

export default Cart