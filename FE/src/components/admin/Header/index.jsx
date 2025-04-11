import { useState } from "react";

function Header() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="app-header">
      <nav className="navbar navbar-expand-lg navbar-light">
        <ul className="navbar-nav">
          <li className="nav-item d-block d-xl-none">
          
          </li>
          <li className="nav-item">
        
          </li>
        </ul>
        <div className="navbar-collapse justify-content-end px-0" id="navbarNav">
          <ul className="navbar-nav flex-row ms-auto align-items-center justify-content-end">
            <li className="nav-item dropdown">
              <a
                className="nav-link nav-icon-hover"
                href="#"
                id="drop2"
                onClick={toggleDropdown}
              >
                <img
                  src="/assets/images/profile/user-1.jpg"
                  alt="Ảnh đại diện"
                  width="35"
                  height="35"
                  className="rounded-circle"
                />
              </a>
              <div
                className={`dropdown-menu dropdown-menu-end dropdown-menu-animate-up ${isDropdownOpen ? "show" : ""}`}
                aria-labelledby="drop2"
                style={{ right: 0, left: "auto" }} 
              >
                <div className="message-body">
                  <a href="#" className="d-flex align-items-center gap-2 dropdown-item">
                    <i className="ti ti-user fs-6"></i>
                    <p className="mb-0 fs-3">Hồ sơ của tôi</p>
                  </a>
                  <a href="#" className="d-flex align-items-center gap-2 dropdown-item">
                    <i className="ti ti-mail fs-6"></i>
                    <p className="mb-0 fs-3">Tài khoản của tôi</p>
                  </a>
                  <a href="#" className="d-flex align-items-center gap-2 dropdown-item">
                    <i className="ti ti-list-check fs-6"></i>
                    <p className="mb-0 fs-3">Công việc của tôi</p>
                  </a>
                  <a href="./authentication-login.html" className="btn btn-outline-primary mx-3 mt-2 d-block">
                    Đăng xuất
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
