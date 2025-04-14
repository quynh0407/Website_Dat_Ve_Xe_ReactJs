import { Outlet, useLocation } from "react-router-dom";
import React, { useEffect } from "react";
import Header from "../components/client/Header";
import Footer from "../components/client/Footer";
import "../styles/client/css/index.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'intersection-observer';
import {
  initCommentSlider,
  initSwiper,
  initPageVisibility,
  initMenu,
  initBusAnimation
} from "../styles/client/js/main.js";

const ClientLayout = () => {
  const location = useLocation();

  useEffect(() => {
    const menuCleanup = initMenu();
    initCommentSlider();
    initSwiper();
    initPageVisibility();
    initBusAnimation();

    return () => {
      menuCleanup?.();
    };
  }, [location.pathname]);

  return (
    <>
      <Header />    
      <Outlet />
      <Footer />
    </>
  );
};

export default ClientLayout;