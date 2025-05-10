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
  initMenu,
} from "../styles/client/js/main.js";


function ClientLayout() {
  const location = useLocation();
  useEffect(() => {
    const menuCleanup = initMenu();
    initSwiper();
    return () => {
      menuCleanup?.();
    };
  }
  )

  // ============== AN HIEN HEAER ==============
  useEffect(() => {
    const main = document.querySelector("main");
    const homeHeader = document.getElementById("homeHeader");
    const homeComment = document.getElementById("homeComment");

    if (!main) return;

    const allowedPages = ["home", "booktickets", "busDetail"];
    const pathId = location.pathname.replace("/", "") || "home";
    main.id = pathId;

    if (allowedPages.includes(pathId)) {
      if (homeHeader) homeHeader.classList.remove("hidden");
      if (homeComment) homeComment.classList.remove("hidden");
    } else {
      if (homeHeader) homeHeader.classList.add("hidden");
      if (homeComment) homeComment.classList.add("hidden");
    }
  }, [location.pathname]);

  //=============== MENU MOBILE ==================
  useEffect(() => {
    console.clear();

    const navExpand = Array.from(document.querySelectorAll('.nav-expand'));
    const backLink = `<li class="nav-item">
    <a class="nav-link nav-back-link" href="javascript:;">Trở về</a>
  </li>`;

    const listeners = [];

    navExpand.forEach(item => {
      const content = item.querySelector('.nav-expand-content');
      const link = item.querySelector('.nav-link');

      if (content && link) {
        if (!content.querySelector('.nav-back-link')) {
          content.insertAdjacentHTML('afterbegin', backLink);
        }

        const onLinkClick = () => item.classList.add('active');
        link.addEventListener('click', onLinkClick);
        listeners.push({ el: link, fn: onLinkClick });

        const back = content.querySelector('.nav-back-link');
        const onBackClick = () => item.classList.remove('active');
        if (back) {
          back.addEventListener('click', onBackClick);
          listeners.push({ el: back, fn: onBackClick });
        }
      }
    });

    const hamMain = document.getElementById('ham-main');
    const hamUser = document.getElementById('ham-user');

    const onHamMainClick = (e) => {
      e.stopPropagation();
      document.body.classList.toggle('nav-is-toggled');
    };
    const onHamUserClick = (e) => {
      e.stopPropagation();
      console.log("User menu clicked");
    };
    const onDocClick = (e) => {
      const navDrill = document.querySelector('.nav-drill');
      if (
        navDrill &&
        !navDrill.contains(e.target) &&
        (!hamMain || !hamMain.contains(e.target)) &&
        (!hamUser || !hamUser.contains(e.target))
      ) {
        document.body.classList.remove('nav-is-toggled');
      }
    };

    if (hamMain) {
      hamMain.addEventListener('click', onHamMainClick);
      listeners.push({ el: hamMain, fn: onHamMainClick });
    }

    if (hamUser) {
      hamUser.addEventListener('click', onHamUserClick);
      listeners.push({ el: hamUser, fn: onHamUserClick });
    }

    document.addEventListener('click', onDocClick);
    listeners.push({ el: document, fn: onDocClick });

    // ✅ Cleanup khi rời trang
    return () => {
      listeners.forEach(({ el, fn }) => {
        el.removeEventListener('click', fn);
      });
    };

  }, [location.pathname]);


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