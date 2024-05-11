import React from 'react';
import {Divider, Stack} from "@mui/material";
import {CategoryItem} from "../CategoryItem/CategoryItem.jsx";
import style from './CategoryRow.module.css';

export const CategoryRow = (props) => {
  return (
    <Stack direction="row" className={`${props.className} ${style.wrapper}`}>
      {props.items.map((category, index) => (
        <React.Fragment key={category}>
          <CategoryItem category={{title: category}} className={style.item} />
          {index < props.items.length - 1 && <Divider orientation="vertical" className={style.divider}/>}
        </React.Fragment>
      ))}
    </Stack>
  )
}