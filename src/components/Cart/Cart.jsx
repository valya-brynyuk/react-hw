import {ShoppingCart} from "@mui/icons-material";
import {Badge, Box, Button, Popover, Stack, Typography} from "@mui/material";
import {useSelector} from "react-redux";
import {cartItemsCount, cartTotal} from "../../store/slice/cartSlice.js";
import {useState} from "react";
import style from './Cart.module.css';
import {CartList} from "../CartList/CartList.jsx";
import {Link} from "react-router-dom";
import {routes} from "../../routes/routes.js";

export const Cart = () => {
  const count = useSelector(cartItemsCount);
  const total = useSelector(cartTotal);
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-cart' : undefined;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <Button variant="secondary" className={style.btn} onClick={handleClick}>
        <Badge badgeContent={count} color="success">
          <ShoppingCart/>
        </Badge>

        Кошик
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Box className={style.popover}>
          {
            count > 0
              ? <>
                <Stack direction="column" spacing={2}>
                  <CartList/>
                  <Link to={routes.cart()}>
                    <Typography variant="h5" component="h5">
                      Go To Cart
                    </Typography>
                  </Link>
                  <Typography variant="h3" component="h6">Total: {total} $</Typography>
                </Stack>
              </>
              : <Typography>No items added</Typography>
          }
        </Box>
      </Popover>
    </>
  )
}