import { FaTachometerAlt, FaBus, FaRoute, FaUserCog, FaUserTie, FaFileInvoice, FaCommentDots, FaPhone } from "react-icons/fa";
import { MdDirectionsBus, MdFeedback } from "react-icons/md";


function Aside() {
  return (
    <aside className="left-sidebar">
      <div>
        <div className="brand-logo d-flex align-items-center justify-content-between">
          <a href="/admin" className="text-nowrap logo-img">
            <img src="/assets/images/logos/logo.png" width="180" alt="Logo" />
          </a>
          <div className="close-btn d-xl-none d-block sidebartoggler cursor-pointer" id="sidebarCollapse">
            <i className="ti ti-x fs-8"></i>
          </div>
        </div>

        <nav className="sidebar-nav scroll-sidebar" data-simplebar="">
          <ul id="sidebarnav">
            <li className="nav-small-cap">
              <span className="hide-menu">Home</span>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link" href="/admin">
                <FaTachometerAlt />
                <span className="hide-menu">Bảng điều khiển</span>
              </a>
            </li>

            <li className="nav-small-cap">
              <span className="hide-menu">Quản lý chuyến</span>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link" href="/admin/routes/getAll">
                <FaRoute />
                <span className="hide-menu">Quản lý tuyến đường</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link" href="/admin/busRoutes/getAll">
                <MdDirectionsBus />
                <span className="hide-menu">Quản lý tuyến xe</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link" href="/admin/bus/getAll">
                <FaBus />
                <span className="hide-menu">Quản lý xe</span>
              </a>
            </li>

            <li className="nav-small-cap">
              <span className="hide-menu">Quản lý tài khoản</span>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link" href="/admin/user/getAll">
                <FaUserCog />
                <span className="hide-menu">Quản lý người dùng</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link" href="/admin/driver/getAll">
                <FaUserTie />
                <span className="hide-menu">Quản lý tài xế</span>
              </a>
            </li>

            <li className="nav-small-cap">
              <span className="hide-menu">Quản lý chung</span>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link" href="/admin/blog/getAll">
                <MdFeedback />
                <span className="hide-menu">Quản lý Blog</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link" href="/admin/historyBill/getAll">
                <FaFileInvoice />
                <span className="hide-menu">Quản lý Hóa đơn</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link" href="/admin/review/getAll">
                <FaCommentDots />
                <span className="hide-menu">Quản lý Đánh Giá</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link" href="/admin/contact/getAll">
                <FaPhone />
                <span className="hide-menu">Quản lý Liên hệ</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}
export default Aside;