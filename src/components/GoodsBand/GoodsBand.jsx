import {Stack, Typography} from "@mui/material";
import {Swiper, SwiperSlide} from "swiper/react";
import {GoodCard} from "../GoodCard/GoodCard.jsx";
import {useGetProductsByCategoryQuery} from "../../store/query/product.js";
import {Loader} from "../Loader/Loader.jsx";
import Grid from "@mui/material/Unstable_Grid2";
import style from './GoodsBand.module.css';

export const GoodsBand = (props) => {
  const productsResp = useGetProductsByCategoryQuery(props.category, props.itemsPerPage);

  return (
    <Stack direction="column" spacing={2}>
      <Stack direction="row" spacing={2} alignItems="center">
        <Typography variant="h4" component="h2">
          {props.title}
        </Typography>

        {props.link}
      </Stack>
      <Grid>
        <Loader
          resp={productsResp}
          data={() => {
            return (
              <Swiper
                slidesPerView={props.itemsPerPage}
                spaceBetween={15}
                autoHeight
              >
                {productsResp.data.map((item) => {
                  return (
                    <SwiperSlide key={`product-${props.category}-${item.id}`} className={style.slide}>
                      <GoodCard
                        product={item}
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            )
          }}
        />
      </Grid>
    </Stack>
  )
}