import React, { useContext } from 'react'
import { BiCart } from 'react-icons/bi';
import Badge from 'react-bootstrap/Badge';
import { CartContext } from '../../../context/CartContext';

const CartWidget = () => {

    const {cartCount} = useContext(CartContext)

    return (
    <div>
        <BiCart/><Badge bg="primary">{cartCount()}</Badge>
    </div>
    )
}

export default CartWidget