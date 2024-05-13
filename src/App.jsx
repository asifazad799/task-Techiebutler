import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "./App.css";
import { NoPageFound, Posts } from "./pages";

import { DefaultLayout } from "./components";

function App() {
  return (
    <DefaultLayout>
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Posts />} />
            <Route path="*" element={<NoPageFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </DefaultLayout>
  );
}

export default App;
