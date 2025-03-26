import { Outlet, Link } from "react-router-dom";
import Aside from "../components/admin/aside";
import Header from "../components/admin/Header";
import "../styles/admin/css/styles.min.css";

import "../styles/admin/js/dashboard.ts";
import "../styles/admin/js/app.min.ts";
import "../styles/admin/js/sidebarmenu.ts";

const AdminLayout = () => {
    return (
        <div class="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
            data-sidebar-position="fixed" data-header-position="fixed">
            <Aside />
            <div class="body-wrapper">
                <Header />
                <Outlet />
            </div>
        </div>
    );
};

export default AdminLayout;
