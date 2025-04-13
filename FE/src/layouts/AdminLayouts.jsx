import { Outlet, Link } from "react-router-dom";
import Aside from "../components/admin/aside";
import Header from "../components/admin/Header";
import "../styles/admin/css/styles.min.css";


import "../styles/admin/js/app.min.ts";
import "../styles/admin/js/sidebarmenu.js";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminLayout = () => {
    return (
        <>
            <ToastContainer position="top-right" autoClose={3000} />
            <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
                data-sidebar-position="fixed" data-header-position="fixed">
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
        </>
    );
};


export default AdminLayout;
