import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "datatables.net-bs5";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Notification = () => {
  return (
    <ul class="navbar-nav">
      <li class="nav-item dropstart">
        <button
          class="btn btn-transparent btn-lg"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i className="bi bi-bell-fill"></i>
        </button>
        <ul class="dropdown-menu ">
          <li>
            <a class="dropdown-item" href="#">
              Action
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Another action
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Something else here
            </a>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default Notification;
