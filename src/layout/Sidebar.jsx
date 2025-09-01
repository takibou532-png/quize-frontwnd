import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="bg-light p-3 vh-100" style={{ width: "200px" }}>
      <h4>القائمة</h4>
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
}

