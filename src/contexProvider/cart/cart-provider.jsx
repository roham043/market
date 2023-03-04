import React, { useEffect, useState, createContext } from 'react';
import {
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
    getCartItemCount,
    getCartItemTotal
} from './cartUtility';

export const CartContext = createContext({
    hidden: true,
    toggleCartHidden: () => { },
    cartItems: [],
    addItem: () => { },
    decreaseItem: () => { },
    cartItemsCount: 0,
    cartItemTotal: 0,
    cleareItemCart: () => { }
})

const CartProvider = ({ children }) => {
    const [hidden, setHidden] = useState(true);
    const toggleCartHidden = () => setHidden(!hidden);
    const [cartItems, setCartItems] = useState([]);
    const addItem = (item) => setCartItems(addItemToCart(cartItems, item));
    const decreaseItem = (item) => setCartItems(removeItemFromCart(cartItems, item));
    const [cartItemsCount, setCartItemsCount] = useState(0);
    const [cartItemTotal, setCartItemTotal] = useState(0);
    const cleareItemCart = (item) => setCartItems(clearItemFromCart(cartItems, item));
    useEffect(() => {
        setCartItemsCount(getCartItemCount(cartItems));
        setCartItemTotal(getCartItemTotal(cartItems))
    }, [cartItems])
    return (
        <CartContext.Provider
            value={{
                hidden,
                toggleCartHidden,
                cartItems,
                addItem,
                decreaseItem,
                cartItemsCount,
                cleareItemCart,
                cartItemTotal
            }}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider;