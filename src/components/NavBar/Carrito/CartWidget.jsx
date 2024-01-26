import React, { useContext } from 'react';
import { BiCart } from 'react-icons/bi';
import Badge from 'react-bootstrap/Badge';
import { CartContext } from '../../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const { cartCount } = useContext(CartContext);
    const count = cartCount().toString();

    return (
        <div>
            <Link to="/carrito">
                <BiCart />
                <Badge bg="primary">{count}</Badge>
            </Link>
        </div>
    );
}

export default CartWidget;
