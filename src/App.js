import logo from "./logo.svg";
import React from "react";
import "./App.css";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import Block from "./pages/Block";
import Transaction from "./pages/Transactions";
import SerialNumber from "./pages/SerialNumber";
import NotFound from "./pages/NotFound";

function App() {
  return (
    // <React.StrictMode>
    //   <RouterProvider router={router} />
    // </React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/block/:blockID" element={<Block />} />
        <Route exact path="/tx/:txID" element={<Transaction />} />
        <Route exact path="/sn/:snID" element={<SerialNumber />} />
        <Route exact path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
