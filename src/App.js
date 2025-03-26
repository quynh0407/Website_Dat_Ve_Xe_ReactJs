
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayouts";
import ClientLayout from "./layouts/ClientLayouts";
import Dashboard from "./pages/admin/dashboard";
import BusRoute from "./pages/admin/busRoute";
import Home from "./pages/client/Home";
import Bus from "./pages/client/Bus";
import {MainJs} from "./styles/client/js";

// Hàm kiểm tra quyền Admin
/* const isAdmin = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return user?.role === "admin";
};
 */
/* const AdminRoute = ({ element }) => {
  return isAdmin() ? element : <Navigate to="/" />;
}; */

const AppRoutes = () => {
  MainJs(); // Chạy JS cho client
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ClientLayout />}>
          <Route index element={<Home />} />
          <Route path="bus" element={<Bus />} />
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="busroute" element={<BusRoute />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
