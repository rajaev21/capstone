import { Link } from "react-router-dom";

const Sidebar = () => {
  const role = localStorage.getItem("role");
  return (
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
        <Link className="nav-link text-dark" to="/dashboard">
          Dashboard
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-dark" to="/order">
          Order
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-dark" to="/transaction">
          Transactions
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-dark" to="/inventory">
          Inventory
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-dark" to="/history">
          History
        </Link>
      </li>
      {role === "1" && (
        <li className="nav-item">
          <Link className="nav-link text-dark" to="/register">
            Make employee account
          </Link>
        </li>
      )}
    </ul>
  );
};

export default Sidebar;
