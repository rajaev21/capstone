import { useState } from "react";
const TransactionTable = ({ transaction, goto, title }) => {
  const [search, setSearch] = useState("");
  const [pageCount, setPageCount] = useState(0);
  const filteredItems =
    Array.isArray(transaction) &&
    transaction.filter((item) =>
      Object.values(item).some((val) =>
        String(val).toLowerCase().includes(search.toLowerCase())
      )
    );
  const itemsPerPage = 5;
  const start = pageCount * itemsPerPage;
  const end = start + itemsPerPage;
  const currentItems = filteredItems.length
    ? filteredItems.slice(start, end)
    : [];
  const totalPage = Math.ceil(filteredItems.length / itemsPerPage);
  console.log();
  return (
    <div className="card p-3">
      <div className="row row-cols-2">
        <div className="fs-3 fw-bold text-capitalize">{title}</div>
        <h6>
          Search:{" "}
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </h6>
      </div>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Created_by</th>
            <th>OrderDate</th>
            <th>Deadline</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.transaction_id}</td>
                <td>
                  {item.fullname.trim() !== "" ? item.fullname : "Quick Order"}
                </td>
                <td>{item.created_by}</td>
                <td>{item.order_date}</td>
                <td>{item.deadline}</td>
                <td>{item.status}</td>
                <td>
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => goto(item.transaction_id, item)}
                  >
                    <i className="bi bi-eye"></i>
                  </button>
                </td>
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
  );
};

export default TransactionTable;
