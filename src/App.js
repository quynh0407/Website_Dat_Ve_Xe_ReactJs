import "./styles/css/index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import  "../src/styles/js/main.js";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/client/Header";
import Footer from "./components/client/Footer";
import Home from "./pages/client/home";
import "@fortawesome/fontawesome-free/css/all.min.css";


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
