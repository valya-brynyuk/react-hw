import {MainLayout} from "../../templates/MainLayout/MainLayout.jsx";
import {useParams} from "react-router-dom";
import {useGetSingleProductQuery} from "../../store/query/product.js";
import {Loader} from "../../components/Loader/Loader.jsx";
import Grid from "@mui/material/Unstable_Grid2";
import {Button, Rating, Stack, Typography} from "@mui/material";
import {Comment, ShoppingCart} from "@mui/icons-material";
import style from './ProductPage.module.css';
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {setProductBreadcrumb} from "../../store/slice/breadcrumbSlice.js";
import {addToCart} from "../../store/slice/cartSlice.js";
import {addToast} from "../../store/slice/toastSlice.js";


export const ProductPage = (props) => {
  const params = useParams();
  const dispatch = useDispatch();
  const productResp = useGetSingleProductQuery(params.id);

  useEffect(() => {
    if (productResp.data) {
      dispatch(setProductBreadcrumb(productResp.data));
    }
  }, [productResp]);

  const addBtnClickHandler = () => {
    dispatch(addToCart(props.product));
    dispatch(addToast('Item added successfully.'));
  }

  return (
    <MainLayout>
      <Loader
        resp={productResp}
        data={() => {
          return (
            <Grid container spacing={3}>
              <Grid xs={12} md={5}>
                <img src={productResp.data.image} alt={productResp.data.title} className={style.image}/>
              </Grid>
              <Grid xs={12} md={7}>
                <Stack direction="column" spacing={4}>
                  <Typography component="h2" variant="h1">{productResp.data.title}</Typography>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Rating name={`product-rating`} value={productResp.data.rating.rate} readOnly/>
                    <Comment/>
                    <span>{productResp.data.rating.count}</span>
                  </Stack>
                  <Stack direction="row" spacing={1} alignItems="center" justifyContent="space-between">
                    <Typography variant="h3" component="span">{productResp.data.price}$</Typography>
                    <Button variant="contained" color="primary" size="large" startIcon={<ShoppingCart/>}
                            onClick={addBtnClickHandler} type="button">
                      Купити
                    </Button>
                  </Stack>
                  <Typography component="div" variant="body1"
                              className={style.description}>{productResp.data.description}</Typography>
                </Stack>
              </Grid>
            </Grid>
          )
        }}
      />
    </MainLayout>
  )
}