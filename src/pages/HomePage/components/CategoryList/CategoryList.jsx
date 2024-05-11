import {Box, Stack} from "@mui/material";
import {CategoryItem} from "../CategoryItem/CategoryItem.jsx";
import style from './CategoryList.module.css';

export const CategoryList = (props) => {
  return (
    <Box className={`${props.className} ${style.wrapper}`}>
      {props.items.map(category => (
        <CategoryItem key={category} withArrow category={{title: category}} className={style.item}/>
      ))}
    </Box>
  );
}