import {Link} from "react-router-dom";
import {ArrowRightAltOutlined} from "@mui/icons-material";
import style from './GoodsPageLink.module.css';

export const GoodsPageLink = (props) => {
  return (
    <Link className={style.wrapper} to={props.url}> Дивитися всі <ArrowRightAltOutlined /></Link>
  )
}