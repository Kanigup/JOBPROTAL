import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Footer from "./Footer";
import DataProvider from "./Component/Store/Store";
function App() {
  return (
    <>
      <DataProvider>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
      </DataProvider>
    </>
  );
}

export default App;
