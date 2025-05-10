//--------------------CLIENT--------------------
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayouts";
import ClientLayout from "./layouts/ClientLayouts";
import Dashboard from "./pages/admin/dashboard";
import Home from "./pages/client/Home";
import Bus from "./pages/client/Bus";
import AboutUs from "./pages/client/About-us";
import Blog from "./pages/client/Blog";
import Contact from "./pages/client/Contact";
import BusDetail from "./pages/client/BusDetail";
import BookingHistory from "./pages/client/BookingHistory";
import BookingDetail from "./pages/client/BookingHistory/bookingDetail";
import Profile from "./pages/client/Profile";
import Login from "./pages/authenticator/Login";
import Register from "./pages/authenticator/Register";
import Otp from "./pages/authenticator/Register/otp";
import BookingTickets from "./pages/client/BookingTickets";


//------------ADMIN-------------
import BusGetAll from "./pages/admin/bus/getAll";
import BusCreate from "./pages/admin/bus/Create";
import BusEdit from "./pages/admin/bus/Edit";

import BusTypeGetAll from "./pages/admin/busType/getAll";
import BusTypeCreate from "./pages/admin/busType/Create";
import BusTypeEdit from "./pages/admin/busType/Edit";

import RoutesGetAll from "./pages/admin/routes/getAll";
import RoutesForm from "./pages/admin/routes/Form";

import BusRoutesGetAll from "./pages/admin/busRoutes/getAll";
import BusRoutesCreate from "./pages/admin/busRoutes/Create";
import BusRoutesEdit from "./pages/admin/busRoutes/Edit";

import UserGetAll from "./pages/admin/user/getAll";
import UserCreate from "./pages/admin/user/Create";
import UserEdit from "./pages/admin/user/Edit";

import DiverGetAll from "./pages/admin/diver/getAll";
import DiverCreate from "./pages/admin/diver/Create";
import DiverEdit from "./pages/admin/diver/Edit";

import BlogGetAll from "./pages/admin/blog/getAll";
import BlogCreate from "./pages/admin/blog/Create";
import BlogEdit from "./pages/admin/blog/Edit";

import HistoryBillGetAll from "./pages/admin/historyBill/getAll";
import HistoryBillEdit from "./pages/admin/historyBill/Edit";

import ReviewGetAll from "./pages/admin/reviews/getAll";
import ReviewEdit from "./pages/admin/reviews/Edit";

import ContactGetAll from "./pages/admin/contact/getAll";
import ContactEdit from "./pages/admin/contact/Edit";
import ResetForm from "./pages/authenticator/resetForm";
import ResetPassword from "./pages/authenticator/resetPassword";

import PrivateRoute from "./components/AuthCheck";
import BlogCategoryGetAll from "./pages/admin/blog/getAllCategory";
import BlogCategoryCreate from "./pages/admin/blog/CreateCategory";
import BlogCategoryEdit from "./pages/admin/blog/EditCategory";
import BlogDetail from "./pages/client/BlogDetail";
import ManageBooking from "./pages/client/ManageBooking";


const AppRoutes = () => {
  return (
    <Routes>

      <Route path="/" element={<ClientLayout />}>
        <Route index element={<Home />} />
        <Route path="bus" element={<Bus />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/blog/category/:id" element={<Blog />} />
        <Route path="/tra-cuu-ve" element={<ManageBooking />} />
      </Route>



      <Route path="dang-nhap" element={<Login />} />
      <Route path="dang-ky" element={<Register />} />
      <Route path="dang-ky/otp" element={<Otp />} />
      <Route path="lich-su-dat-ve/:id" element={<BookingDetail />} />


      <Route path="/" element={<ClientLayout />}>
        <Route path="lich-su-dat-ve" element={<BookingHistory />} />

        <Route path="profile" element={<Profile />} />
        <Route path="bookingTickets/:tripId" element={<BookingTickets />} />
      </Route>


      <Route path="/admin" element={<PrivateRoute><AdminLayout /></PrivateRoute>}>
        <Route index element={<Dashboard />} />
        <Route path="bus">
          <Route path="getAll" element={<BusGetAll />} />
          <Route path="create" element={<BusCreate />} />
          <Route path="edit/:id" element={<BusEdit />} />
        </Route>

        <Route path="busType">
          <Route path="getAll" element={<BusTypeGetAll />} />
          <Route path="create" element={<BusTypeCreate />} />
          <Route path="update/:id" element={<BusTypeEdit />} />
        </Route>

        <Route path="routes">
          <Route path="getAll" element={<RoutesGetAll />} />
          <Route path="create" element={<RoutesForm />} />
          <Route path="edit" element={<RoutesForm />} />
        </Route>

        <Route path="busRoutes">
          <Route path="getAll" element={<BusRoutesGetAll />} />
          <Route path="create" element={<BusRoutesCreate />} />
          <Route path="edit/:id" element={<BusRoutesEdit />} />
        </Route>

        <Route path="user">
          <Route path="getAll" element={<UserGetAll />} />
          <Route path="create" element={<UserCreate />} />
          <Route path="edit" element={<UserEdit />} />
        </Route>

        <Route path="driver">
          <Route path="getAll" element={<DiverGetAll />} />
          <Route path="create" element={<DiverCreate />} />
          <Route path="edit" element={<DiverEdit />} />
        </Route>

        <Route path="blog">
          <Route path="getAll" element={<BlogGetAll />} />
          <Route path="create" element={<BlogCreate />} />
          <Route path="edit" element={<BlogEdit />} />
          <Route path="createCategory" element={<BlogCategoryCreate />} />
          <Route path="getCategoryAll" element={< BlogCategoryGetAll />} />
          <Route path="editCategory" element={< BlogCategoryEdit />} />
        </Route>

        <Route path="historyBill">
          <Route path="getAll" element={<HistoryBillGetAll />} />
          <Route path="edit" element={<HistoryBillEdit />} />
        </Route>

        <Route path="review">
          <Route path="getAll" element={<ReviewGetAll />} />
          <Route path="edit" element={<ReviewEdit />} />
        </Route>

        <Route path="contact">
          <Route path="getAll" element={<ContactGetAll />} />
          <Route path="edit/:id" element={<ContactEdit />} />
        </Route>


      </Route>
    </Routes>
  );
};

export default AppRoutes;