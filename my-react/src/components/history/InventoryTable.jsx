import { useEffect, useState } from "react";

const InventoryTable = ({ inventory }) => {
  const [search, setSearch] = useState("");
  const [pageCount, setPageCount] = useState(0);

  const filteredItems =
    Array.isArray(inventory) &&
    inventory.filter((item) =>
      Object.values(item).some((val) =>
        String(val).toLowerCase().includes(search.toLowerCase())
      )
    );

  const itemsPerPage = 10;
  const start = pageCount * itemsPerPage;
  const end = start + itemsPerPage;
  const currentItems =
    Array.isArray(filteredItems) && filteredItems.slice(start, end);
  const totalPage = Math.ceil(filteredItems.length / itemsPerPage);

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="fs-3 fw-bold">Inventory</div>
        <input
          type="text"
          className="form-control w-25"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="table-responsive">
        <table className="table table-hover table-bordered align-middle">
          <thead className="table-light">
            <tr>
              <th>Inventory ID</th>
              <th>Brand</th>
              <th>Type</th>
              <th>Color</th>
              <th>Size</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.length > 0 &&
              currentItems.map((item, index) => (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.brand}</td>
                  <td>{item.type ? item.type : "No Type"}</td>
                  <td>{item.color ? item.color : "No Color"}</td>
                  <td>{item.size ? item.size : "No Size"}</td>
                  <td>{item.qty ? item.qty : "No Stocks"}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <nav className="d-flex justify-content-center mt-3">
        <ul className="pagination pagination-sm">
          <li className="page-item">
            <button
              className="page-link"
              onClick={() => setPageCount(0)}
              disabled={pageCount === 0}
            >
              &laquo;
            </button>
          </li>
          <li className="page-item">
            <button
              className="page-link"
              onClick={() => setPageCount((prev) => prev - 1)}
              disabled={pageCount === 0}
            >
              Previous
            </button>
          </li>
          <li className="page-item active">
            <span className="page-link">{pageCount + 1}</span>
          </li>
          <li className="page-item">
            <button
              className="page-link"
              onClick={() => setPageCount((prev) => prev + 1)}
              disabled={pageCount + 1 >= totalPage}
              style={{ width: "70px" }}
            >
              Next
            </button>
          </li>
          <li className="page-item">
            <button
              className="page-link"
              onClick={() => setPageCount(totalPage - 1)}
              disabled={pageCount === totalPage - 1}
            >
              &raquo;
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default InventoryTable;
