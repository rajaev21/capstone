import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />

      <div className="container-fluid">
        <div className="row">
          {/* Sidebar visible on lg and above */}
          <div className="col-lg-2 d-none d-lg-block bg-light border-end p-0 vh-100">
            <Sidebar />
          </div>

          {/* Main content */}
          <div className="col-lg-10 col-12 p-4">{children}</div>
        </div>
      </div>

      {/* Offcanvas Sidebar for mobile */}
      <div
        className="offcanvas offcanvas-start d-lg-none"
        tabIndex="-1"
        id="sidebarOffcanvas"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">Menu</h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
          ></button>
        </div>
        <div className="offcanvas-body p-0">
          <Sidebar />
        </div>
      </div>
    </>
  );
};

export default Layout;
