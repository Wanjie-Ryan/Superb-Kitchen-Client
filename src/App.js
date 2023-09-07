import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePagesComponent from "./pages/homePage/home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePagesComponent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
