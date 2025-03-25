import "./styles/css/index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import  "../src/styles/js/main.js";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/client/Header";
import Footer from "./components/client/Footer";
import Home from "./pages/client/Home";
import Blog from "./pages/client/Blog";
import Contact from "./pages/client/Contact/index.jsx";
import Bus from "./pages/client/Bus";
import BookingTickets from "./pages/client/BookingTickets";
import Profile from "./pages/client/Profile";
import AboutUs from "./pages/client/About-us/index.jsx";
import Login from "./pages/client/Login/index.jsx";
import Register from "./pages/client/Register/index.jsx";
import BookingHistory from "./pages/client/BookingHistory/index.jsx";



function App() {
  return (
    <Router>
      <boddy className="m-0 p-0">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/bus" element={<Bus />} />
        <Route path="/bookingTicket" element={<BookingTickets />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/bookingHistory" element={<BookingHistory />} />
      </Routes>
      <Footer />
      </boddy>
    </Router>
  );
}

export default App;
