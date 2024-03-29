import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
)

// export const selectCartItemCount = createSelector(
//     [selectCartItems],
//     cartItems => cartItems.reduce((accumulatedQuantity, cartItems) =>
//         accumulatedQuantity + cartItems.quantity, 0)
// )

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)
export const name = {
    
}
// export const selectCartItemstotal = createSelector(
//     [selectCartItems],
//     cartItems => cartItems.reduce((accumulatedQuantity, cartItems) =>
//         accumulatedQuantity + cartItems.quantity * cartItems.price, 0)
// )