import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { CartProvider } from "./Context/CartContext";
import { AuthContext, AuthProvider } from "./Context/AuthContext";
import { OrderProvider } from "./Context/OrderContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <CartProvider>
    <OrderProvider>
      <App />
      </OrderProvider>
    </CartProvider>
  </AuthProvider>
);
