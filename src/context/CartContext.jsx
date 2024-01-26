import { createContext } from "react";

export const CartContext = createContext();


export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);

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
    }
    const cartCount = () => {
        return cart.reduce((acc, prod) => acc + prod.Count, 0)
    }

    const precioTotal = () => {
        return cart.reduce((acc, prod) => acc + prod.price * prod.Count, 0);
    };

    const emptyCart = () => {
        setCart([]);
    }
    return  <CartContext.Provider value={{cart, addToCart, cartCount, precioTotal, emptyCart}}>
        {children}
    </CartContext.Provider>
}