import {NavigateNext} from "@mui/icons-material";
import {Link} from "react-router-dom";
import {Breadcrumbs as BBreadcrumbs, Container, Typography} from "@mui/material";
import style from './Breadcrumbs.module.css';
import {useSelector} from "react-redux";
import {selectBreadcrumbs} from "../../store/slice/breadcrumbSlice.js";

export const Breadcrumbs = () => {
  const breadcrumbs = useSelector(selectBreadcrumbs);

  return (
    <Container maxWidth="xl">
      <BBreadcrumbs
        separator={<NavigateNext/>}
        aria-label="breadcrumb"
        className={style.wrapper}
      >
        {breadcrumbs.map((item) => (
          item.url
            ? <Link underline="hover"
                    key={`breadcrumb-${item.title}`}
                    color="inherit"
                    to={item.url}
                    className={style.item}
            >
              {item.title}
            </Link>
            : <Typography
              key={`breadcrumb-${item.title}`}
              color="text.primary"
              className={style.item}
            >
              {item.title}
            </Typography>
        ))}
      </BBreadcrumbs>
    </Container>
  )
}