import React, { useContext } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import { connect } from 'react-redux';
// import { addItem } from '../../redux/cart/cartAction';
import { CartContext } from '../../contexProvider/cart/cart-provider';

const CollectionItem = ({ item }) => {
    const { imageUrl, name, price } = item;
    const { addItem } = useContext(CartContext)
    return (
        <Card sx={{ minWidth: { lg: 345, xs: 150 } }}>
            <CardMedia
                component='img'
                height='200'
                image={imageUrl}
            >
            </CardMedia>
            <CardContent sx={{ display: 'flex', flexDirection: { lg: 'row', xs: 'column' }, justifyContent: 'space-between' }}>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {price} $
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={() => addItem(item)}>add to cart</Button>
            </CardActions>

        </Card>
    )
}
//----------useContext----------------------
// const mapDispatchToProps = dispatch => ({
//     addItem: item => dispatch(addItem(item))
// })
export default CollectionItem;