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
      <h2 className="mb-4">Logs</h2>
      <div className="">
        <table className="table table-striped table-bordered">
          <thead className="">
            <tr>
              <th>Detail</th>
              <th>Inventory ID</th>
              <th>Old value</th>
              <th>New value</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(currentItems) &&
              currentItems.map((log) => {
                const dateObj = new Date(log.timestamp * 1000);
                const date = dateObj.toLocaleDateString();
                const time = dateObj.toLocaleTimeString();
                return (
                  <tr key={log.id}>
                    <td>{log.detail}</td>
                    <td>{log.inventory_id}</td>
                    <td>{log.old_value}</td>
                    <td>{log.new_value}</td>
                    <td>{date} </td>
                    <td>{time} </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        <nav className="d-flex justify-content-center mt-3">
            <ul className="pagination">
              <li className="page-item">
                <button
                  className="page-link"
                  onClick={() => setPageCount(0)}
                  disabled={pageCount === 0}
                >
                  <span aria-hidden="true">&laquo;</span>
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

              <li className="page-item">
                <button className="page-link">{pageCount + 1}</button>
              </li>

              <li className="page-item">
                <button
                  className="page-link"
                  onClick={() => setPageCount((prev) => prev + 1)}
                  disabled={pageCount + 1 >= totalPage}
                  style={{ width: "80px" }}
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
                  <span aria-hidden="true">&raquo;</span>
                </button>
              </li>
            </ul>
          </nav>
      </div>
    </div>
  );
};

export default Logs;
