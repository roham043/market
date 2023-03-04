export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );
    if (existingItem) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(cartItem =>
        cartItem.id === cartItemToRemove.id
    )
    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem =>
            cartItem.id !== cartItemToRemove.id
        )
    }
    return cartItems.map(cartItem =>
        cartItem.id === cartItemToRemove.id ?
            { ...cartItem, quantity: cartItem.quantity - 1 }
            :
            cartItem
    )
}
export const clearItemFromCart = (cartItems, item) => {
    return cartItems.filter(cartItem => cartItem.id !== item.id)
}

export const getCartItemCount = cartItems => {
    return cartItems.reduce((accumulatedQuantity, cartItems) =>
        accumulatedQuantity + cartItems.quantity, 0)
}

export const getCartItemTotal = cartItems => {
    return cartItems.reduce((accumulatedQuantity, cartItems) =>
        accumulatedQuantity + cartItems.quantity * cartItems.price, 0)
}
