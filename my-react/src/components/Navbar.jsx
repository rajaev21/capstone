import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Notification from "./Notification";

const Navbar = ({ inventory, fetchInventory, setLoading }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("isLoggedIn");
    if (token === "true") {
      setIsLoggedIn(true);
    } else {
      navigate("/login");
    }
    // timer();
  }, [navigate]);

  const logout = () => {
    localStorage.setItem("isLoggedIn", "false");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
      <div className="container-fluid">
        <button
          className="btn btn-outline-secondary me-3 d-lg-none"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#sidebarOffcanvas"
        >
          <i className="bi bi-list"></i>
        </button>

        <Link className="navbar-brand fs-3 fw-bold" to="/dashboard">
          FABRIK
        </Link>

        <div className="nav-item d-flex">
          <Notification inventory={inventory} fetchInventory={fetchInventory} />

          <button onClick={logout} className="btn btn-danger ms-auto">
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
