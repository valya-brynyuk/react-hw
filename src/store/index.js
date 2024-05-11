import {combineReducers, configureStore} from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'
import {persistReducer} from "redux-persist";
import {categoriesApi} from './query/category.js';
import {productsApi} from './query/product.js';
import {authApi} from './query/auth.js';
import breadcrumbSlice from "./slice/breadcrumbSlice.js";
import authSlice from "./slice/authSlice.js";
import cartSlice from "./slice/cartSlice.js";
import toastSlice from "./slice/toastSlice.js";

const persistConfig = {
  key: 'shop-app',
  storage
};

export const store = configureStore({
  reducer: persistReducer(persistConfig, combineReducers({
    toasts: toastSlice,
    cart: cartSlice,
    auth: authSlice,
    breadcrumbs: breadcrumbSlice,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  })),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
    .concat(categoriesApi.middleware)
    .concat(productsApi.middleware)
    .concat(authApi.middleware)
})