import {CategoryList} from "../CategoryList/CategoryList.jsx";
import {BannerRow} from "../BannerRow/BannerRow.jsx";
import {BannerSlider} from "../BannerSlider/BannerSlider.jsx";
import {CategoryRow} from "../CategoryRow/CategoryRow.jsx";
import style from "./HeroSection.module.css";

export const HeroSection = (props) => {
  return (
    <div className={style.wrapper}>
      <CategoryList className={style.categoryList} items={props.categories} />
      <BannerRow  className={style.bannerRow}/>
      <BannerSlider  className={style.bannerSlider}/>
      <CategoryRow  className={style.categoryRow} items={props.categories}/>
    </div>
  )
}