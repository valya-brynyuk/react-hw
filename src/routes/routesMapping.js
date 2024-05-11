import HomePage from "../pages/HomePage/index.js";
import ProductPage from "../pages/ProductPage/index.js";
import {routes} from "./routes.js";
import CategoryPage from "../pages/CategoryPage/index.js";
import CartPage from "../pages/CartPage/index.js";

export default [
  {
    path: routes.product(':id'),
    component: ProductPage,
  },
  {
    path: routes.home(),
    component: HomePage
  },
  {
    path: routes.cart(),
    component: CartPage,
  },
  {
    path: routes.category(':category'),
    component: CategoryPage,
  }
]