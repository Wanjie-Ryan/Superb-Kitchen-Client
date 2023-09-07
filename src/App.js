import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePagesComponent from "./pages/homePage/home";
import RegisterPagesComponent from "./pages/register/register";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePagesComponent />} />
          <Route path="/register" element={<RegisterPagesComponent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
