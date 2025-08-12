import { useState } from "react";
const TransactionTable = ({ transaction, setTransaction, fetchTransaction, encrypt, decrypt, goto, deleteOrder, }) => {
  const [search, setSearch] = useState("");
  const [pageCount, setPageCount] = useState(0);
  const filteredItems =
    Array.isArray(transaction) &&
    transaction.filter((item) =>
      Object.values(item).some((val) =>
        String(val).toLowerCase().includes(search.toLowerCase())
      )
    );
  const itemsPerPage = 15;
  const start = pageCount * itemsPerPage;
  const end = start + itemsPerPage;
  const currentItems = filteredItems.slice(start, end);
  const totalPage = Math.ceil(filteredItems.length / itemsPerPage);

  function unixToDate(unix) {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const date = new Date(unix * 1000);
    const yy = date.getFullYear();
    const mm = months[date.getMonth()];
    const dd = date.getDate();

    const format = `${mm} ${dd}, ${yy}`;

    return format;
  }
  function capitalize(str) {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }
  return (
    <div className="">
      <h6>
        Search:{" "}
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </h6>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>OrderDate</th>
            <th>Deadline</th>
            {/* <th>Order ID</th> */}
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item, index) => (
            <tr key={index}>
              <td>{item.transaction_id}</td>
              <td>
                {capitalize(item.firstname)} {capitalize(item.lastname)}
              </td>
              <td>{unixToDate(item.order_date)}</td>
              <td>{unixToDate(item.deadline)}</td>
              {/* <td>{item.order_id}</td> */}
              <td>{item.status}</td>
              <td>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => goto(item.transaction_id)}
                >
                  View more
                </button>
              </td>
            </tr>
          ))}
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
              style={{width:"80px"}}
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
