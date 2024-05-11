import {Stack} from "@mui/material";
import {useSelector} from "react-redux";
import {allCartItems} from "../../store/slice/cartSlice.js";
import {CartItem} from "./components/CartItem/CartItem.jsx";

export const CartList = () => {
  const items = useSelector(allCartItems);

  return (
    <Stack direction="column" spacing={2}>
      {
        items.map(item => (
          <CartItem key={`cart${item.id}`} product={item}/>
        ))
      }
    </Stack>
  )
}