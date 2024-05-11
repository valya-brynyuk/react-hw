import {createSlice} from "@reduxjs/toolkit";
import {routes} from "../../routes/routes.js";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: '',
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
  selectors: {
    isAuthenticated: state => state.token.length > 0,
  },
});

export const {setToken} = authSlice.actions;

export const {isAuthenticated} = authSlice.selectors;

export default authSlice.reducer;