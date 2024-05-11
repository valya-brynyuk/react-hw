import {MainLayout} from "../../templates/MainLayout/MainLayout.jsx";
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {setCategoryBreadcrumb} from "../../store/slice/breadcrumbSlice.js";
import {Stack, Typography} from "@mui/material";
import {useGetProductsByCategoryQuery} from "../../store/query/product.js";
import {Loader} from "../../components/Loader/Loader.jsx";
import {GoodCard} from "../../components/GoodCard/GoodCard.jsx";
import Grid from "@mui/material/Unstable_Grid2";

export const CategoryPage = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const productsResp = useGetProductsByCategoryQuery(params.category);

  useEffect(() => {
    dispatch(setCategoryBreadcrumb(params.category));
  }, []);

  return (
    <MainLayout pageName="CategoryPage">
      <Stack direction="column" spacing={4}>
        <Typography variant="h1" component="h1">{params.category}</Typography>

        <Loader
          resp={productsResp}
          data={() => (
            <Grid container spacing={2}>
              {productsResp.data.map(product => (
                <Grid xs={12} md={4} key={product.id}>
                  <GoodCard
                    product={product}
                  />
                </Grid>
              ))}
            </Grid>
          )}
        />
      </Stack>
    </MainLayout>
  )
}