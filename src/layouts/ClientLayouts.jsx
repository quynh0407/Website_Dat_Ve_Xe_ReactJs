import { Outlet, Link } from "react-router-dom";
import Header from "../components/client/Header";
import Footer from "../components/client/Footer";
import "../styles/client/css/index.css";
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
