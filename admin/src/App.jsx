import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Footer from "./Footer";
function App() {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}

export default App;
