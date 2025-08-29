import { useState } from "react";

const Logs = ({ logs }) => {
  const [pageCount, setPageCount] = useState(0);
  const itemsPerPage = 15;
  const start = pageCount * itemsPerPage;
  const end = start + itemsPerPage;
  const currentItems = logs.slice(start, end);
  const totalPage = Math.ceil(logs.length / itemsPerPage);

  return (
    <div className="container mt-4">
      <h2 className="mb-4"> Activity Logs</h2>

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
                function unixToDate(unix) {
                  const months = [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December",
                  ];

                  const date = new Date(unix * 1000);
                  const yy = date.getFullYear();
                  const mm = months[date.getMonth()];
                  const dd = date.getDate();

                  const format = `${mm} ${dd}, ${yy}`;

                  return format;
                }

                return (
                  <tr key={log.id}>
                    <td>{log.detail}</td>
                    <td className="text-muted">{log.inventory_id}</td>
                    <td className="text-danger">{log.old_value}</td>
                    <td className="text-success">{log.new_value}</td>
                    <td>{unixToDate(log.date)}</td>
                    <td>{time}</td>
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
