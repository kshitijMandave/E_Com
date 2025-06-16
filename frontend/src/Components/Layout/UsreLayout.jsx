import React from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import Home from "../../Pages/Home";
import { Outlet } from "react-router-dom";

function UsreLayout() {
  return (
    <div>
      {/*Hader*/}
      <Header />
      {/*Main Content*/}
      <main>
        <Outlet />
      </main>
      {/*Footer*/}
      <Footer />
    </div>
  );
}

export default UsreLayout;
