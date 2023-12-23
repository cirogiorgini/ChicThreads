import React from 'react'
import { BiCart } from 'react-icons/bi';
import Badge from 'react-bootstrap/Badge';

const CartWidget = () => {
    return (
    <div>
        <BiCart/><Badge bg="primary">9</Badge>
    </div>
    )
}

export default CartWidget