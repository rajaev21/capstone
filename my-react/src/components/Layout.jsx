import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children, inventory, fetchInventory, setLoading }) => {
  return (
    <>
      <div className="container-fluid">
        <Navbar inventory={inventory} fetchInventory={fetchInventory} setLoading={setLoading} />
        <div className="row">
          <div className="col-lg-2 d-none d-lg-block bg-light border-end p-0">
            <Sidebar />
          </div>
          <div className="col-lg-10 col-12 p-4">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Layout;
