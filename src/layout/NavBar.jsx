import logo from "../assets/logo.png";
import "../App.css";

function NavBar() {
  return (
    <nav className="navbar-custom d-flex align-items-center justify-content-between p-2 shadow-sm">
      {/* زر يفتح الـoffcanvas في الموبايل */}
      <button
        className="btn btn-outline-success d-md-none"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#sidebarOffcanvas"
        aria-controls="sidebarOffcanvas"
      >
        ☰
      </button>

      <a className="navbar-brand-custom d-flex align-items-center" href="/">
        <img src={logo} alt="Logo" className="logo me-2" />
        <span className="brand-text">Islamic Quiz</span>
      </a>
    </nav>
  );
}

export default NavBar;
