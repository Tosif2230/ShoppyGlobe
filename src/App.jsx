import React from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;
