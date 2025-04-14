import { Outlet } from "react-router-dom"; // Xóa Link nếu không sử dụng
import Aside from "../components/admin/aside";
import Header from "../components/admin/Header";
import "../styles/admin/css/styles.min.css";
import { useState } from "react";

import ClipLoader from "react-spinners/ClipLoader";
import "../styles/admin/js/app.min.ts";
import "../styles/admin/js/sidebarmenu.js";




const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const AdminLayout = () => {
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("#ffffff");

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
        <Aside />
        <div className="body-wrapper">
          <Header />
          <div className="container-fluid">
            <div className="row mt-2 rounded-1">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
      <ClipLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </>
  );
};

export default AdminLayout;
