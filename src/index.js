import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// we are useing the router package to define when each page should be loaded
import { BrowserRouter } from "react-router-dom";
import { FavoritesContextProvider } from './store/favorites-context';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* We have to wrap our App component in the BrowserRouter component. We can use it as an html element with opening and closing tags. */}
    <FavoritesContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FavoritesContextProvider>
  </React.StrictMode>
);
