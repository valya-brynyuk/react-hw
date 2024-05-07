import {combineReducers, configureStore} from '@reduxjs/toolkit';
import todoSlice from './todoSlice';
import storage from 'redux-persist/lib/storage'
import {persistReducer} from "redux-persist";
import toastSlice from "./toastSlice.js";

const persistConfig = {
  key: 'todo-app',
  storage
};

export const store = configureStore({
  reducer: persistReducer(persistConfig, combineReducers({
    todos: todoSlice,
    toasts: toastSlice,
  })),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
})