import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayouts";
import ClientLayout from "./layouts/ClientLayouts";
import Dashboard from "./pages/admin/dashboard";
import BusRoute from "./pages/admin/busRoute";
import Home from "./pages/client/Home";
import Bus from "./pages/client/Bus";
import AboutUs from "./pages/client/About-us";
import Blog from "./pages/client/Blog";  
import Contact from "./pages/client/Contact";
import BusDetail from "./pages/client/BusDetail";
import BookingHistory from "./pages/client/BookingHistory";
import Profile from "./pages/client/Profile";
import Login from "./pages/client/Login";
import Register from "./pages/client/Register";
 
 
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ClientLayout />}>
          <Route index element={<Home />} />
          <Route path="bus" element={<Bus />} />
          <Route path="BusDetail" element={<BusDetail />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="bookingHistory" element={<BookingHistory />} />
=          <Route path="profile" element={<Profile />} />
        </Route>

        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="busroute" element={<BusRoute />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;