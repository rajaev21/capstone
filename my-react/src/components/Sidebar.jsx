import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
        <Link className="nav-link text-dark" to="/home">
          Home
        </Link>
      </li>
      <li>
        <Link className="nav-link text-dark" to="/order">
          Order
        </Link>
      </li>
      <li>
        <Link className="nav-link text-dark" to="/inventory">
          Inventory
        </Link>
      </li>
      <li>
        <Link className="nav-link text-dark" to="/settings">
          Options
        </Link>
      </li>
    </ul>
  );
};

export default Sidebar;
