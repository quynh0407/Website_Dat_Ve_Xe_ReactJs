import "./styles/css/index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "swiper/css";
import "swiper/css/navigation"; // Nếu dùng navigation
import "swiper/css/pagination"; // Nếu dùng pagination



import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/client/Header";
import Footer from "./components/client/Footer";
import Home from "./pages/client/home";

function App() {
  return (
    <Router>
      <boddy className="m-0 p-0">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
      </boddy>
    </Router>
  );
}

export default App;
