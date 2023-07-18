import React from "react";
import { ToastContainer } from "react-toastify";
import Navbar from "../components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import AddContact from "../components/AddContact";

const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddContact/>} />
        <Route path="/edit/:id" element={<h1>I am the Edit Component</h1>} />
      </Routes>
    </div>
  );
};

export default App;
