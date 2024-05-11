import {Link} from "react-router-dom";
import style from './SlideBanner.module.css'

export const SlideBanner = (props) => {
  return (
    <Link className="slide-banner" to={props.href}>
      <img src={props.image} alt={props.alt} className={style.image} />
    </Link>
  )
}