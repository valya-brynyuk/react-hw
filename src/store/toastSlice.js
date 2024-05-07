import {createSlice} from "@reduxjs/toolkit";
import {generateId} from "../pages/HomePage/components/TodoForm/util/index.js";

const toastSlice = createSlice({
  name: 'toasts',
  initialState: {
    toasts: [],
  },
  reducers: {
    addToast: (state, {payload}) => {
      state.toasts.push({
        ...payload,
        id: generateId('toast'),
      });
    },
    deleteToast: (state, {payload}) => {
      state.toasts = state.toasts.filter((toast) => toast.id !== payload);
      console.log(state.toasts)
    },
    deleteAllToasts: (state) => {
      state.toasts = [];
    }
  },
  selectors: {
    allToasts: (state) => state.toasts,
  }
});

export const {addToast, deleteAllToasts, deleteToast} = toastSlice.actions;

export const {allToasts} = toastSlice.selectors;

export default toastSlice.reducer;