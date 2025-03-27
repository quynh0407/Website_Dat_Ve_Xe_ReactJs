import { Outlet, Link } from "react-router-dom";
import React, { useEffect } from "react";

import Header from "../components/client/Header";
import Footer from "../components/client/Footer";

import  "../styles/client/css/index.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'intersection-observer';
import { initCommentSlider, initSwiper,initPageVisibility, initMenu, initBusAnimation } from "../styles/client/js/main.js";


const ClientLayout = () => {
  useEffect(() => {
    initCommentSlider();
    initSwiper();
    initMenu();
    initBusAnimation();
    initPageVisibility();
  }, []);
  
  return (
    <>
        <Header/>
        <Outlet />
        <Footer/>
    </>
  );
};

export default ClientLayout;
