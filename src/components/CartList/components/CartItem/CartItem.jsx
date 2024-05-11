import {Box, Card, CardContent, CardMedia, IconButton, TextField, Typography} from "@mui/material";
import React from "react";
import {Link} from "react-router-dom";
import {routes} from "../../../../routes/routes.js";
import {Add, Delete, Remove} from "@mui/icons-material";
import {useDispatch} from "react-redux";
import {removeFromCart, updateQuantity} from "../../../../store/slice/cartSlice.js";
import {addToast} from "../../../../store/slice/toastSlice.js";

export const CartItem = (props) => {
  const dispatch = useDispatch();

  const increaseQuantity = () => {
    dispatch(updateQuantity({
      productId: props.product.id,
      quantity: props.product.quantity + 1,
    }));
    dispatch(addToast('Cart item updated'));
  }

  const decreaseQuantity = () => {
    const newQty = props.product.quantity - 1;
    if (newQty < 1) {
      return;
    }

    dispatch(updateQuantity({
      productId: props.product.id,
      quantity: newQty,
    }));
    dispatch(addToast('Cart item updated'));
  }

  const inputChangeHandler = (event) => {
    const val = parseFloat(event.currentTarget.value);
    if (!Number.isFinite(val) || val < 1) {
      return;
    }

    dispatch(updateQuantity({
      productId: props.product.id,
      quantity: val,
    }));
    dispatch(addToast('Cart item updated'));
  }

  const removeClickHandler = () => {
    if (!confirm("Are you sure you want to remove this product?")) {
      return;
    }

    dispatch(removeFromCart(props.product.id));
    dispatch(addToast('Cart item deleted'));
  }

  return (
    <Card sx={{display: 'flex'}}>
      <CardMedia
        component="img"
        sx={{width: 100, height: 100, objectFit: 'contain'}}
        image={props.product.image}
        alt={props.product.title}
      />
      <Box sx={{display: 'flex', flexDirection: 'column'}}>
        <CardContent sx={{flex: '1 0 auto'}}>
          <Link to={routes.product(props.product.id)}>
            <Typography component="div" variant="h5">
              {props.product.title}
            </Typography>
          </Link>
        </CardContent>
        <Box sx={{display: 'flex', alignItems: 'center', pl: 1, pb: 1}}>
          <IconButton aria-label="previous" onClick={decreaseQuantity}>
            <Remove />
          </IconButton>
          <TextField value={props.product.quantity} onChange={inputChangeHandler} />
          <IconButton aria-label="next" onClick={increaseQuantity}>
            <Add />
          </IconButton>
          <IconButton aria-label="next" color="error" onClick={removeClickHandler}>
            <Delete />
          </IconButton>
          <Typography component="div" variant="h5">
            {props.product.price * props.product.quantity}$
          </Typography>
        </Box>
      </Box>
    </Card>
  )
}