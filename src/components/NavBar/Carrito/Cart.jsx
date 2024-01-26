import React, { useContext } from 'react'
import { CartContext } from '../../../context/CartContext';

const Cart = () => {

  const {cart} = useContext(CartContext)


  return (
    <div>
        {
          cart.map((prod) => (
          <article key={prod.id}>
            <section className='prod-title'>
              <h2>{prod.title}</h2>
            </section>
            <section className='prod-count'>
                <Button> + </Button>
                <p>{units}</p>
                <Button> - </Button>
            </section>
            <section className='prod-price'>
                <p>{ prod.price}</p>
            </section>


          </article>))
        }
    </div>
  )
}

export default Cart