import { Outlet, Link } from "react-router-dom";

import Header from "../components/client/Header";
import Footer from "../components/client/Footer";

import  "../styles/client/css/index.css";
import "../styles/client/js/main.ts"
import '@fortawesome/fontawesome-free/css/all.min.css';

const ClientLayout = () => {
  return (
    <>
        <Header/>
        <Outlet />
        <Footer/>
    </>
  );
};

export default ClientLayout;
