import React,{useContext} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CheckoutItem from '../../checkout-item/checkoutItem';
// import { createStructuredSelector } from 'reselect';
// import { selectCartItems } from '../../../redux/cart/cartSelectors';
// import { selectCartItemstotal } from '../../../redux/cart/cartSelectors';
// import { connect } from 'react-redux';
import {CartContext} from '../../../contexProvider/cart/cart-provider';

const CheckoutPage =() => {
    const {cartItems,cartItemTotal} = useContext(CartContext);
    return (
        <React.Fragment>
            <CssBaseline />
            <Container fixed>
                <Box sx={{ height: '100vh' }} >
                    {
                        cartItems.map(cartItem =>
                            <CheckoutItem key={cartItem.id} cartItem={cartItem}></CheckoutItem>)
                    }
                    <Box
                    sx={{
                        display:'flex',
                        flexDirection:'row',
                        justifyContent:'center',
                        alignItems:'center',
                        bgcolor: '#f2f2f2',
                        boxShadow: 1,
                        borderRadius: 1,
                        p: 2,
                        maxWidth: 300,
                        ml:57,
                        border:1
                    }}
                >
                    <Box sx={{ color: 'text.secondary',fontWeight:'bold',fontSize: 20 }}>total:</Box>
                    <Box sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium',ml:3 }}>
                        {cartItemTotal}$
                    </Box>
                    <Box
                        sx={{
                            color: 'success.dark',
                            display: 'inline',
                            fontWeight: 'medium',
                            mx: 0.5,
                        }}
                    >
                        18.77%
                    </Box>
                    <Box sx={{ color: 'text.secondary', display: 'inline', fontSize: 12 }}>
                        vs. last week
                    </Box>
                </Box>
                </Box>
                
            </Container>
        </React.Fragment>
    );
}
//--------use context ---------------
// const mapStateToProps = createStructuredSelector({
//     // cartItems: selectCartItems,
//     total: selectCartItemstotal
// })
export default CheckoutPage;