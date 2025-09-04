import { Link, useLocation } from "react-router-dom";

const Notification = ({ inventory }) => {
  const paramID = new URLSearchParams(useLocation().search);
  const lowStocks = Array.isArray(inventory)
    ? inventory.filter((item) => item.qty < 31)
    : [];
  return (
    <ul className="navbar-nav me-3">
      <li className="nav-item dropstart">
        <button
          className="btn btn-transparent"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style={{ border: "0px" }}
          disabled={lowStocks < 1}
        >
          <i className="bi bi-bell-fill"></i>
          <span className="position-absolute top-0 start-0 translate-middle badge rounded-pill text-bg-secondary">
            {lowStocks.length > 0 && lowStocks.length}
          </span>
        </button>
        <ul className="dropdown-menu ">
          {lowStocks?.map((item, index) => {
            return (
              <li key={index} className="nav-item">
                <Link
                  className="nav-link text-dark"
                  onClick={() =>
                    setTimeout(() => {
                      window.location.reload();
                    }, 500)
                  }
                  to={`/inventory?id=${item.id}`}
                >
                  Low stock ID: {item.id}
                </Link>
              </li>
            );
          })}
        </ul>
      </li>
    </ul>
  );
};

export default Notification;
