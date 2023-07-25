import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { configureStore, createStore } from "@reduxjs/toolkit";
import contactReducer from "../redux/reducers/contactReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import App from "./app"; // Asegúrate de que la ruta sea correcta según la ubicación de app.js

const store = createStore(contactReducer, composeWithDevTools())

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);