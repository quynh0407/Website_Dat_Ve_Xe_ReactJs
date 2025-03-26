import { Outlet, Link } from "react-router-dom";
import Aside from "../components/admin/aside";
import Header from "../components/admin/Header";
import "../styles/admin/css/styles.css";
/* import "../../public/assets/libs/jquery/dist/jquery.js";
import "../../public/assets/js/dashboard.js";
import "../../public/assets/js/sidebarmenu.js";
import "../../public/assets/libs/apexcharts/dist/apexcharts.js";
import "../../public/assets/libs/simplebar/dist/simplebar.js"; */


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
