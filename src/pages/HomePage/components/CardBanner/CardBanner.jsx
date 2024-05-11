import {Link} from "react-router-dom";
import {Card, CardContent, CardMedia, Typography} from "@mui/material";
import style from "./CardBanner.module.css";

export const CardBanner = (props) => {
  return (
    <Link to={props.href} className={style.wrapper}>
      <Card sx={{ display: 'flex' }} className={style.card}>
        <CardMedia
          component="img"
          image={props.image}
          alt={props.title}
          className={style.img}
        />
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {props.title}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  )
}