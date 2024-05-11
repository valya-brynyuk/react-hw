import {Swiper, SwiperSlide} from "swiper/react";
import {SlideBanner} from "../SlideBanner/SlideBanner.jsx";
import {Container} from "@mui/material";

export const BannerSlider = (props) => {
  return (
    <Container className={props.className}>
      <Swiper
        spaceBetween={50}
        slidesPerView={4}
      >
        <SwiperSlide>
          <SlideBanner
            href="/"
            image="https://placehold.co/600x400"
            alt="alt"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideBanner
            href="/"
            image="https://placehold.co/600x400"
            alt="alt"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideBanner
            href="/"
            image="https://placehold.co/600x400"
            alt="alt"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideBanner
            href="/"
            image="https://placehold.co/600x400"
            alt="alt"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideBanner
            href="/"
            image="https://placehold.co/600x400"
            alt="alt"
          />
        </SwiperSlide>
        <SwiperSlide>

          <SlideBanner
            href="/"
            image="https://placehold.co/600x400"
            alt="alt"
          />
        </SwiperSlide>
        <SwiperSlide>

          <SlideBanner
            href="/"
            image="https://placehold.co/600x400"
            alt="alt"
          />
        </SwiperSlide>
      </Swiper>
    </Container>
  )
}