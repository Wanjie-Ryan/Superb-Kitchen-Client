import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePagesComponent from "./pages/homePage/home";
import RegisterPagesComponent from "./pages/register/register";
import LoginPagesComponent from "./pages/login/login";
import CartPagesComponent from "./pages/cart/cart";
import RecordsPagesComponent from './pages/records/records'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePagesComponent />} />
          <Route path="/register" element={<RegisterPagesComponent />} />
          <Route path="/login" element={<LoginPagesComponent />} />
          <Route path="/cart" element={<CartPagesComponent />} />
          <Route path="/records" element={<RecordsPagesComponent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
