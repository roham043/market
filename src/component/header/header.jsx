import React,{useContext} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { ReactComponent as Logo } from '../../assests/crown.svg';
import { connect } from 'react-redux';
import { deleteCurrentUser } from '../../redux/user/userAction';
import ShopCartIcon from "../shopping-cartIcon/shoppingCartIcon";
import CartDropdown from '../cart-dropdown/cartDropDown';
import { selectCurrentUser } from '../../redux/user/userSelectors';
// import { selectCartHidden } from '../../redux/cart/cartSelectors';
import { createStructuredSelector } from 'reselect';
import {CartContext} from '../../contexProvider/cart/cart-provider';


// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = ({ currentUser, deleteCurrentUser }) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const {hidden} = useContext(CartContext);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Button href="/" rel="noopener" sx={{ maxWidth: 70, maxHeight: 70, mr: 2, display: { xs: 'none', md: 'flex' } }}>
              <Logo></Logo>
            </Button>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >

                <MenuItem onClick={handleCloseNavMenu}>
                  <Button href="/shop">shop</Button>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Button >contact</Button>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Button >blog</Button>
                </MenuItem>

              </Menu>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <Button href="/" sx={{ maxWidth: 70, maxHeight: 70, flexGrow: 1, ml: 0, display: { xs: 'flex', md: 'none' } }}>
                <Logo></Logo>
              </Button>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button href="/shop"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                shop
              </Button>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                contact
              </Button>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                blog
              </Button>

            </Box>
            <Box sx={{ mr: 2 }}>
              <ShopCartIcon></ShopCartIcon>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {/* {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))} */}
                <MenuItem onClick={handleCloseNavMenu}>
                  <Button >Profile</Button>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Button >Account</Button>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Button >Dashboard</Button>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  {
                    currentUser ? <Button onClick={() =>
                      deleteCurrentUser({ currentUser: null })}>
                      Log out
                    </Button>
                      : <Button href="/signin">Log in</Button>
                  }

                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {
        hidden ? null : <CartDropdown></CartDropdown>
      }

    </Box>
  );
};

// const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
//   currentUser,
//   hidden
// })
//----use selectors ---------------------
// const mapStateToProps = (state) => ({
//   currentUser:selectCurrentUser(state),
//   hidden:selectCartHidden(state)
// })
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  // hidden: selectCartHidden
})


const mapDispatchToProps = dispatch => ({
  deleteCurrentUser: user => dispatch(deleteCurrentUser(user))
})
export default connect(mapStateToProps, mapDispatchToProps)(ResponsiveAppBar);