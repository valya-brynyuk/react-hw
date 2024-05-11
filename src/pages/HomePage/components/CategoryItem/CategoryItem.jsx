import {Link} from "react-router-dom";
import {Computer, Diamond, Folder, Man, NavigateNext, Woman} from "@mui/icons-material";
import {routes} from "../../../../routes/routes.js";

const CATEGORY_ICON_MAP = {
  electronics: <Computer />,
  jewelery: <Diamond />,
  "men's clothing": <Man />,
  "women's clothing": <Woman />,
}

export const CategoryItem = ({ category, withArrow, className }) => {
  return (
    <Link to={routes.category(category.title)} className={className}>
      {CATEGORY_ICON_MAP[category.title] || <Folder />}

      <span>{category.title}</span>

      {withArrow && <NavigateNext/>}
    </Link>
  )
}