import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("isLoggedIn");
    if (token === "true") {
      setIsLoggedIn(true);
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const logout = () => {
    localStorage.setItem("isLoggedIn", "false");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        {/* Offcanvas toggle button - only visible on mobile */}
        <button
          className="btn btn-outline-secondary me-3 d-lg-none"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#sidebarOffcanvas"
        >
          <i className="bi bi-list"></i>
        </button>

        <Link className="navbar-brand fs-3 fw-bold" to="/home">
          FABRIK
        </Link>

        <button onClick={logout} className="btn btn-danger ms-auto">
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
