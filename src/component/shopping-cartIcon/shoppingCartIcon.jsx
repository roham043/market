import React, { useContext } from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import { connect } from 'react-redux';
// import { toggelCartHidden } from '../../redux/cart/cartAction';
import { Box } from '@mui/material';
// import { selectCartItemCount } from '../../redux/cart/cartSelectors';
// import { createStructuredSelector } from 'reselect';
import { CartContext } from '../../contexProvider/cart/cart-provider';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

const ShopCartIcon = () => {
  const { toggleCartHidden, cartItemsCount } = useContext(CartContext)
  return (
    <Box onClick={toggleCartHidden}>
      <IconButton aria-label="cart" >
        <StyledBadge badgeContent={cartItemsCount} color="secondary">
          <ShoppingCartIcon />
        </StyledBadge>
      </IconButton>
    </Box>
  );
}
//------use context ------------
// const mapStateToProps = (createStructuredSelector)({
//   itemCount: selectCartItemCount

// })
// ------use context--------------
// const mapDispatchToProps = dispatch => ({
//   toggleCartHidden: () => dispatch(toggelCartHidden())
// })
export default ShopCartIcon;