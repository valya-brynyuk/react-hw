import {createSlice} from "@reduxjs/toolkit";
import {routes} from "../../routes/routes.js";

const toastSlice = createSlice({
  name: "toasts",
  initialState: {
    toasts: []
  },
  reducers: {
    addToast: (state, action) => {
      state.toasts.push(action.payload)
    },
    removeToast: (state, action) => {
      state.toasts.splice(state.toasts.indexOf(action.payload), 1);
    }
  },
  selectors: {
    allToasts: state => state.toasts,
  },
});

export const {addToast, removeToast} = toastSlice.actions;

export const {allToasts} = toastSlice.selectors;

export default toastSlice.reducer;