import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import homeIcon from "../assets/home.png";
import aboutIcon from "../assets/info.png";
import categoryIcon from "../assets/category.png";
import "../App.css";

export default function Sidebar() {
  const [categories, setCategories] = useState([]);
  const location = useLocation();

  useEffect(() => {
    axios
      .get("http://localhost:8080/categories")
      .then((res) => setCategories(res.data))
      .catch((err) => console.error("Error fetching categories:", err));
  }, []);

  // 👉 دالة لغلق الـ offcanvas يدويا
  const closeOffcanvas = () => {
    const offcanvasEl = document.getElementById("sidebarOffcanvas");
    if (offcanvasEl) {
      const bsOffcanvas = window.bootstrap.Offcanvas.getInstance(offcanvasEl);
      if (bsOffcanvas) bsOffcanvas.hide();
    }
  };

  // المحتوى المشترك
  const SidebarLinks = () => (
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item mb-2">
        <Link
          className={`nav-link sidebar-link d-flex align-items-center ${location.pathname === "/" ? "active-link" : ""
            }`}
          to="/"
          onClick={closeOffcanvas}
        >
          <img src={homeIcon} alt="home" width="20" className="me-2" />

          الصفحة الرئيسية
        </Link>
      </li>

      {categories.map((cat) => (
        <li className="nav-item mb-2" key={cat.id}>
          <Link
            to={`/category/${cat.name}`}
            className={`nav-link sidebar-link ${location.pathname === `/category/${cat.name}` ? "active-link" : ""
              }`}
            onClick={closeOffcanvas}
          >
            <img src={categoryIcon} alt="icon" width="20" className="me-2" />
            {cat.name}
          </Link>
        </li>
      ))}

      <li className="nav-item mb-2">
        <Link
          className={`nav-link sidebar-link ${location.pathname === "/information" ? "active-link" : ""
            }`}
          to="/information"
          onClick={closeOffcanvas}
        >
          🌿 السنن والأذكار
        </Link>
      </li>

      <li className="nav-item mb-2">
        <Link
          className={`nav-link sidebar-link ${location.pathname === "/about" ? "active-link" : ""
            }`}
          to="/about"
          onClick={closeOffcanvas}
        >
          <img src={aboutIcon} alt="about" width="18" className="me-2" />
          حول الموقع
        </Link>
      </li>
    </ul>
  );

  return (
    <>
      {/* Sidebar في الموبايل (offcanvas) */}
      <div
        className="offcanvas offcanvas-start d-md-none custom-offcanvas"
        tabIndex="-1"
        id="sidebarOffcanvas"
        aria-labelledby="sidebarOffcanvasLabel"
        style={{
          width: "250px",
          background: "linear-gradient(180deg, #fff, #f9fdf9)",
        }}
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title text-success fw-bold">
            Islamic Quiz
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body p-3">
          <SidebarLinks />
        </div>
      </div>

      {/* Sidebar في الـDesktop (ثابت) */}
      <div
        className="d-none d-md-block p-3 shadow-sm"
        style={{
          width: "250px",
          background: "linear-gradient(180deg, #ffffff, #f9fdf9)",
          minHeight: "100vh",
          borderRight: "1px solid #ddd",
          position: "sticky",
          top: 0,
        }}
      >
        <SidebarLinks />
      </div>
    </>
  );
}
