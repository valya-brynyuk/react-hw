import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.jsx'
import {store} from './store'
import {Provider} from 'react-redux'
import {PersistGate} from "redux-persist/integration/react";
import {persistStore} from "redux-persist";

import 'swiper/css';
import './index.css'
import {createTheme, ThemeProvider} from "@mui/material";

const persistor = persistStore(store)

const theme = createTheme({
  typography: {
    fontSize: 14
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <PersistGate loading={null} persistor={persistor}>
          <App/>
        </PersistGate>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
)
