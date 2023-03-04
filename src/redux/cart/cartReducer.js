import { cartActionType } from './cartType';
import { addItemToCart } from './cartUtility';
import { removeItemFromCart } from './cartUtility';

const INITIAL_STATE = {
    hidden: true,
    cartItems:[]
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case cartActionType.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case cartActionType.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case cartActionType.CLEAR_CART_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem =>
                    cartItem.id !== action.payload.id
                )
            }
        case cartActionType.DECREASE_CART_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }
        default:
            return state
    }
}
export default cartReducer;