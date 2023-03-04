import React, { useContext } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CartItem from '../cart-Item/cartItem';
// import { connect } from 'react-redux';
// import { selectCartItems } from '../../redux/cart/cartSelectors';
import { withRouter } from 'react-router-dom';
// import { toggelCartHidden } from '../../redux/cart/cartAction';
import { CartContext } from '../../contexProvider/cart/cart-provider';

const CartDropdown = ({ history }) => {
    const { cartItems, toggleCartHidden } = useContext(CartContext);
    return (
        <Box sx={{ position: 'absolute', ml: { xl: 155, md: 120 }, width: 250 }}>
            <Box>
                {
                    cartItems.map(cartItem =>
                        <CartItem key={cartItem.id} item={cartItem}></CartItem>)
                }
                <Button variant="contained" onClick={() => {

                    history.push('/checkout');
                    toggleCartHidden();
                }}>Go to checkout</Button>
            </Box>

        </Box>
    );
}
//-----------useContext----------------
// const mapStateToProps = (state) => ({
//     cartItems: selectCartItems(state)
// })
export default withRouter(CartDropdown);