import React from "react";
import { ToastContainer } from "react-toastify";
import Navbar from "../components/Navbar";
import { Switch } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
        <h1>Welcome to React Redux Contact List</h1>
    </div>
  );
};

export default App;
