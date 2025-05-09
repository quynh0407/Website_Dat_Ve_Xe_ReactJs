import { Outlet, useLocation } from "react-router-dom";
import React, { useEffect } from "react";
import Header from "../components/client/Header";
import Footer from "../components/client/Footer";
import "../styles/client/css/index.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "../../src/styles/client/scss/index.scss";
import 'intersection-observer';
import { useState } from "react";
import { HashLoader } from "react-spinners";
import {
  initSwiper,
  initPageVisibility,
  initMenu,
} from "../styles/client/js/main.js";


const ClientLayout = () => {

  useEffect(() => {    
    const menuCleanup = initMenu();
    initSwiper();
    initPageVisibility();
    return () => {
      menuCleanup?.();
    };
  }
  )



  return (
    <>

      <div
        className="page-wrapper"
        id="main-wrapper"
        data-layout="vertical"
        data-navbarbg="skin6"
        data-sidebartype="full"
        data-sidebar-position="fixed"
        data-header-position="fixed"
      >
        <Header />
        <Outlet />
        <Footer />
      </div>

    </>
  );
};

export default ClientLayout;