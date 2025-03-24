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
      </Routes>
      <Footer />
      </boddy>
    </Router>
  );
}

export default App;
