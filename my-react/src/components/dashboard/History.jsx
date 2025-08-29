import { useState } from "react";

const History = ({ logs }) => {
  const [pageCount, setPageCount] = useState(0);
  const [search, setSearch] = useState("");
  const itemsPerPage = 15;
  const start = pageCount * itemsPerPage;
  const end = start + itemsPerPage;

  const filteredItems =
    Array.isArray(logs) &&
    logs.filter((item) =>
      Object.values(item).some((val) =>
        String(val).toLowerCase().includes(search.toLowerCase())
      )
    );

  const currentItems = Array.isArray(filteredItems) && filteredItems.slice(start, end);
  const totalPage = Math.ceil(filteredItems.length / itemsPerPage);
  return (
    <div className="mt-4">
      <h2 className="mb-4">History</h2>

      <input
        type="text"
        className="form-control w-25"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="table-responsive" style={{ maxHeight: "70vh" }}>
        <table className="table table-hover table-bordered align-middle">
          <thead className="table-light sticky-top">
            <tr>
              <th>Detail</th>
              <th>Inventory ID</th>
              <th>Old Value</th>
              <th>New Value</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(currentItems) && currentItems.length > 0 ? (
              currentItems.map((log) => {
                console.log(log);

                return (
                  <tr key={log.id}>
                    <td>{log.detail}</td>
                    <td className="text-muted">{log.inventory_id}</td>
                    <td className="text-danger">{log.old_value}</td>
                    <td className="text-success">{log.new_value}</td>
                    <td></td>
                    <td></td>
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

export default History;
