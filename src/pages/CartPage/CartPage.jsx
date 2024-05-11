import {MainLayout} from "../../templates/MainLayout/MainLayout.jsx";
import {Button, Stack, Typography} from "@mui/material";
import {CartList} from "../../components/CartList/CartList.jsx";
import {addToast} from "../../store/slice/toastSlice.js";
import {useDispatch, useSelector} from "react-redux";
import {cartTotal, clearCart} from "../../store/slice/cartSlice.js";
import {useNavigate} from "react-router-dom";
import {routes} from "../../routes/routes.js";

export const CartPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const total = useSelector(cartTotal);

  const placeBtnClickHandler = () => {
    dispatch(clearCart());
    dispatch(addToast('Order successfully placed'));
    navigate(routes.home());
  }

  return (
    <MainLayout hideBreadcrumbs>
      <Stack direction="column" spacing={4}>
        <Typography variant="h1" component="h1">Cart</Typography>
        <Typography variant="h3" component="h2">Total: {total}$</Typography>

        <CartList/>

        <Button type="button" size="large" fullWidth variant="contained" color="success" onClick={placeBtnClickHandler}>Place
          Order</Button>
      </Stack>
    </MainLayout>
  )
}