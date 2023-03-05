import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CartProvider } from "./context/CartContext";
import GlobalStyle from "./styles/GlobalStyles";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <>
    <CartProvider>
      <GlobalStyle />
      <App />
    </CartProvider>
  </>
);
