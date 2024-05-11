import {Button, Card, CardContent, CardMedia, Rating, Stack, Typography} from "@mui/material";
import style from "./GoodCard.module.css";
import {Comment, ShoppingCart} from "@mui/icons-material";
import {Link} from "react-router-dom";
import {routes} from "../../routes/routes.js";
import {useDispatch} from "react-redux";
import {addToCart} from "../../store/slice/cartSlice.js";
import {addToast} from "../../store/slice/toastSlice.js";

export const GoodCard = (props) => {
  const dispatch = useDispatch();

  const addBtnClickHandler = () => {
    dispatch(addToCart(props.product));
    dispatch(addToast('Item added successfully.'));
  }

  return (
    <Card className={style.card}>
      <Link to={routes.product(props.product.id)} className={style.link}>
        <CardMedia
          component="img"
          image={props.product.image}
          alt={props.product.title}
          className={style.image}
        />
      </Link>
      <CardContent>
        <Stack direction="column" spacing={2}>
          <Link to={routes.product(props.product.id)} className={style.link}>
            <Typography gutterBottom variant="h5" component="div">
              {props.product.title}
            </Typography>
          </Link>
          <Stack direction="row" spacing={1} alignItems="center">
            <Rating name={`product-rating-${props.product.id}`} value={props.product.rating.rate} readOnly/>
            <Comment/>
            <span>{props.product.rating.count}</span>
          </Stack>
          <Stack direction="row" spacing={1} alignItems="center" justifyContent="space-between">
            <Typography variant="h3" component="span">{props.product.price}$</Typography>
            <Button variant="contained" color="primary" type="button" onClick={addBtnClickHandler}>
              <ShoppingCart/>
            </Button>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}