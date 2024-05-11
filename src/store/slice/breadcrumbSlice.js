import {createSlice} from "@reduxjs/toolkit";
import {routes} from "../../routes/routes.js";

const homeBreadcrumb = {
  url: routes.home(),
  title: 'Гoлoвна',
}

const breadcrumbSlice = createSlice({
  name: "breadcrumbs",
  initialState: {
    breadcrumbs: [],
  },
  reducers: {
    setCategoryBreadcrumb: (state, action) => {
      state.breadcrumbs = [
        {...homeBreadcrumb},
        {title: action.payload},
      ];
    },
    setProductBreadcrumb: (state, action) => {
      state.breadcrumbs = [
        {...homeBreadcrumb},
        {
          url: routes.category(action.payload.category),
          title: action.payload.category,
        },
        {title: action.payload.title},
      ]
    }
  },
  selectors: {
    selectBreadcrumbs: state => state.breadcrumbs,
  },
});

export const {setCategoryBreadcrumb, setProductBreadcrumb} = breadcrumbSlice.actions;

export const {selectBreadcrumbs} = breadcrumbSlice.selectors;

export default breadcrumbSlice.reducer;