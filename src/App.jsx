import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./layout/Sidebar";
import Home from "./pages/Home";
import About from "./pages/About";
import NavBar from "./layout/NavBar";
import Questions from "./pages/Questions";
import Information from "./pages/Information";

function App() {
  return (
    <Router>
      <div className="d-flex flex-column" style={{ height: "100vh" }}>
        {/* Navbar */}
        <NavBar />

        <div className="d-flex">
          {/* Sidebar */}
          <Sidebar />

          {/* Main content */}
          <div className="p-4 flex-grow-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/category/:categoryname" element={<Questions />} />
              <Route path="/information" element={<Information />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
