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
import Page from "./pages/Page";
import OnlyPage from "./pages/OnlyPage";
import SerialDetail from "./pages/SerialDetail";
import TransactionDetail from "./pages/TransactionDetail";

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
        <Route exact path="/tx/:txID/1" element={<TransactionDetail />} />
        <Route exact path="/sn/:snID" element={<SerialNumber />} />
        <Route exact path="/sn/:snID/1" element={<SerialDetail />} />
        <Route exact path="/page/:pgnum/:perpage" element={<Page />} />
        <Route exact path="/page/:pgnum" element={<OnlyPage />} />
        <Route exact path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
