import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {RegContextProvider} from './components/context/regContext'
import {LogContextProvider} from './components/context/logContext'

import { CartProvider } from "../src/components/context/cart";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RegContextProvider>
      <LogContextProvider>

    <CartProvider>
      <App />
    </CartProvider>
      </LogContextProvider>
      <ToastContainer className="toast-container" />

    </RegContextProvider>
  </React.StrictMode>
);
