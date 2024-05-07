import HomePage from "./HomePage/index.js";
import PageNotFound from "./PageNotFound/index.js";
import TodosPage from "./TodosPage/index.js";

export default [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/todo/:id',
    component: TodosPage
  },
  {
    path: '*',
    component: PageNotFound
  }
]