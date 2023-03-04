import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import { alpha } from '@mui/material/styles';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { pink, red } from '@mui/material/colors';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
// import { connect } from 'react-redux';
// import { clearItem, addItem, decreaseItem } from '../../redux/cart/cartAction';
import { CartContext } from '../../contexProvider/cart/cart-provider';

const CheckoutItem = ({ cartItem, clearItem }) => {
    const { imageUrl, name, price, quantity } = cartItem;
    const { addItem, decreaseItem, cleareItemCart } = useContext(CartContext)
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'center',
                bgcolor: '#f2f2f2',
                overflow: 'hidden',
                borderRadius: '12px',
                boxShadow: 1,
                fontWeight: 'bold',
                m: 2
            }}
        >
            <Box
                component="img"
                sx={{
                    height: 233,
                    width: 350,
                    maxHeight: { xs: 233, md: 167 },
                    maxWidth: { xs: 350, md: 250 },
                    m: 2
                }}
                alt="The house from the offer."
                src={imageUrl}
            />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: { xs: 'center', md: 'flex-start' },
                    m: 3,
                    minWidth: { md: 350 },
                }}
            >
                <Box component="span" sx={{ fontSize: 16, mt: 1 }}>
                    {name}
                </Box>
                <Box component="span" sx={{ color: 'primary.main', fontSize: 22 }}>
                    {price}$ * {quantity} = {price * quantity}
                </Box>
                <Box
                    sx={{
                        mt: 1.5,
                        p: 0.5,
                        backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.1),
                        borderRadius: '5px',
                        color: 'primary.main',
                        fontWeight: 'medium',
                        display: 'flex',
                        fontSize: 12,
                        alignItems: 'center',
                        '& svg': {
                            fontSize: 21,
                            mr: 0.5,
                        },
                    }}
                >
                    <ErrorOutlineIcon />
                    CONFIDENCE SCORE 85%
                </Box>
            </Box>
            <Box>
                <Box>
                    <ArrowDropUpIcon onClick={() => addItem(cartItem)}
                        fontSize="large" color="success" sx={{ cursor: 'pointer' }} />
                </Box>
                <Box sx={{ ml: 1.5 }}>
                    {quantity}
                </Box>
                <Box>
                    <ArrowDropDownIcon onClick={() => decreaseItem(cartItem)}
                        fontSize="large" sx={{ color: pink[500], cursor: 'pointer' }} />
                </Box>
            </Box>
            <Box>
                <DeleteForeverIcon onClick={() => cleareItemCart(cartItem)}
                    fontSize="large" sx={{ ml: 20, color: red[500], cursor: 'pointer' }} />
            </Box>
        </Box>
    );
}
//-----------useContext----------------
// const mapDispatchToProps = dispatch => ({
//     clearItem: (item) => dispatch(clearItem(item)),
//     decreaseItem: (item) => dispatch(decreaseItem(item)),
//     addItem: (item) => dispatch(addItem(item))
// })
export default CheckoutItem;