import { useState } from "react";

const Logs = ({ logs }) => {
  const [pageCount, setPageCount] = useState(0);
  const [search, setSearch] = useState("");
  const itemsPerPage = 10;
  const start = pageCount * itemsPerPage;
  const end = start + itemsPerPage;

  const filteredItems =
    Array.isArray(logs) &&
    logs.filter((item) =>
      Object.values(item).some((val) =>
        String(val).toLowerCase().includes(search.toLowerCase())
      )
    );

  const currentItems =
    Array.isArray(filteredItems) && filteredItems.slice(start, end);
  const totalPage = Math.ceil(filteredItems.length / itemsPerPage);

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="fs-3 fw-bold mb-0 col">History</div>
        <input
          type="text"
          className="form-control w-25 mb-2"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="table-responsive">
        <table className="table table-hover table-bordered align-middle">
          <thead>
            <tr>
              <th>ID</th>
              <th>Detail</th>
              <th>Inventory ID</th>
              <th>Brand</th>
              <th>Type</th>
              <th>Color</th>
              <th>Size</th>
              <th>Old Value</th>
              <th>New Value</th>
              <th>Changed Value</th>
              <th>Date</th>
              <th>Time</th>
              <th>Remarks</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(currentItems) && currentItems.length > 0 ? (
              currentItems.map((log) => {
                const increasedItem = ["cancel transaction", "quantity added"];
                return (
                  <tr key={log.id}>
                    <td>{log.id}</td>
                    <td>{log.detail}</td>
                    <td className="text-muted">{log.inventory_id}</td>
                    <td className="">{log.brand}</td>
                    <td className="">{log.type}</td>
                    <td className="">{log.color}</td>
                    <td className="">{log.size}</td>
                    <td className="text-danger">{log.old_value}</td>
                    <td className="text-success">{log.new_value}</td>
                    <td
                      className={
                        increasedItem.includes(log.detail)
                          ? "text-success"
                          : "text-danger"
                      }
                    >
                      {log.changed_value}
                    </td>
                    <td>{log.date}</td>
                    <td>{log.time}</td>
                    <td>{log.remarks}</td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="6" className="text-center text-muted">
                  No logs available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <nav className="d-flex justify-content-center mt-3">
        <ul className="pagination">
          <li className={`page-item ${pageCount === 0 ? "disabled" : ""}`}>
            <button className="page-link" onClick={() => setPageCount(0)}>
              &laquo;
            </button>
          </li>

          <li className={`page-item ${pageCount === 0 ? "disabled" : ""}`}>
            <button
              className="page-link"
              onClick={() => setPageCount((prev) => prev - 1)}
            >
              Previous
            </button>
          </li>

          <li className="page-item active">
            <span className="page-link">{pageCount + 1}</span>
          </li>

          <li
            className={`page-item ${
              pageCount + 1 >= totalPage ? "disabled" : ""
            }`}
          >
            <button
              className="page-link"
              onClick={() => setPageCount((prev) => prev + 1)}
            >
              Next
            </button>
          </li>

          <li
            className={`page-item ${
              pageCount === totalPage - 1 ? "disabled" : ""
            }`}
          >
            <button
              className="page-link"
              onClick={() => setPageCount(totalPage - 1)}
            >
              &raquo;
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Logs;
