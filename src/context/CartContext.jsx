import { createContext, useState, useEffect  } from "react";
import Swal from 'sweetalert2'

export const CartContext = createContext();

const startCart = JSON.parse(localStorage.getItem("cart")) || []; 


export const CartProvider = ({children}) => {


    const [cart, setCart] = useState(startCart);

    const addToCart = (item, Count) => {
        const addedItem = { ...item, Count }

        const newCart = [...cart];
        const inCart = newCart.find((item) => item.id === addedItem.id)
        if (inCart) {
            inCart.Count += Count;
        } else {
            newCart.push(addedItem)
        }
        setCart(newCart);

        Swal.fire({
            title: "Se ha agregado correctamente",
            text: "",
            icon: "success",
            timer: 800,
          });

    }
    const cartCount = () => {
        return cart.reduce((acc, prod) => acc + prod.Count, 0)
    }

    const precioTotal = () => {
        return cart.reduce((acc, prod) => acc + prod.price * prod.Count, 0);
    };

    const emptyCart = () => {
        setCart([]);
        Swal.fire({
            title: "Carrito vaciado correctamente",
            text: "",
            icon: "success",
            timer: 1500 ,
            timerProgressBar: true,
          });
    }

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart])


    return  <CartContext.Provider value={{cart, addToCart, cartCount, precioTotal, emptyCart}}>
        {children}
    </CartContext.Provider>
}
