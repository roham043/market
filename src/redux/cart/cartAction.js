import { cartActionType } from './cartType';

export const toggelCartHidden = () => ({
    type: cartActionType.TOGGLE_CART_HIDDEN
})

export const addItem = item => ({
    type: cartActionType.ADD_ITEM,
    payload: item
})

export const clearItem = item => ({
    type: cartActionType.CLEAR_CART_ITEM,
    payload: item
})

export const decreaseItem = item => ({
    type: cartActionType.DECREASE_CART_ITEM,
    payload: item
})