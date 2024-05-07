import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.jsx'
import "bootstrap/dist/css/bootstrap.css"
import './index.css'
import {store} from './store'
import {Provider} from 'react-redux'
import {PersistGate} from "redux-persist/integration/react";
import {persistStore} from "redux-persist";

const persistor = persistStore(store)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App/>
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
