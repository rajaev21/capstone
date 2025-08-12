import { useEffect, useState } from "react";
import axios from "axios";

const InventoryTable = ({ inventory, fetch, fetchLogs }) => {
  const role = localStorage.getItem("role");
  const [search, setSearch] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [oldQuantity, setOldQuantity] = useState("");
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
  const currentItems = filteredItems.slice(start, end);
  const totalPage = Math.ceil(filteredItems.length / itemsPerPage);

  const priceUpdate = (id) => {
    const data = { action: "setPrice", value: price, id: id };
    axios
      .post("http://localhost/capstone/submit.php", data, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        if (typeof response.data === "number") {
          fetch();
          fetchLogs();
          setPrice("");
        }
      });
  };

  const deleteItem = (id, quantity) => {
    if (quantity <= 0) {
      const data = { action: "deleteInventory", id: id };
      axios
        .post("http://localhost/capstone/submit.php", data, {
          headers: { "Content-Type": "application/json" },
        })
        .then(() => {
          fetch();
          fetchLogs();
        });
      return;
    }
    alert(
      `Inventory ID #${id} cannot be deleted. Make sure the quantity of stock is 0`
    );
  };

  const updateQuantity = (id) => {
    const qty = Number(oldQuantity) + Number(quantity);
    const data = { action: "updateQuantity", id: id, value: qty };
    axios
      .post("http://localhost/capstone/submit.php", data, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        fetch();
        fetchLogs();
        setQuantity("");
        setOldQuantity("");
      });
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="mb-0">Inventory </h4>
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
              <th>ID</th>
              <th>Brand</th>
              <th>Type</th>
              <th>Color</th>
              <th>Size</th>
              <th>Quantity</th>
              <th>Price (₱)</th>
              {role == 2 ||
                (role == 1 && <th className="text-center">Actions</th>)}
            </tr>
          </thead>
          <tbody>
            {currentItems.length > 0 &&
              currentItems.map((item, index) => (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.brand}</td>
                  <td>{item.type}</td>
                  <td>{item.color}</td>
                  <td>{item.size.toString().toUpperCase()}</td>
                  <td>{item.qty}</td>
                  <td>{item.price == 0 ? "No price set" : item.price}</td>
                  {role == 2 ||
                    (role == 1 && (
                      <td className="text-center">
                        <div className="btn-sm d-flex text justify-content-center gap-2">
                          <button
                            type="button"
                            className="btn btn-outline-primary"
                            data-bs-toggle="modal"
                            data-bs-target={`#${index}Price`}
                          >
                            <i className="bi bi-currency-dollar"></i>
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-info"
                            data-bs-toggle="modal"
                            data-bs-target={`#${index}Quantity`}
                            onClick={() => {
                              setOldQuantity(item.qty);
                            }}
                          >
                            <i className="bi bi-plus-circle"></i>
                          </button>
                          <button
                            onClick={() => deleteItem(item.id, item.qty)}
                            type="button"
                            className="btn btn-outline-danger"
                          >
                            <i className="bi bi-trash"></i>
                          </button>
                        </div>

                        <div
                          className="modal fade"
                          id={`${index}Price`}
                          tabIndex="-1"
                          aria-hidden="true"
                        >
                          <div className="modal-dialog">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h5 className="modal-title">
                                  Set Price #{item.id}
                                </h5>
                                <button
                                  type="button"
                                  className="btn-close"
                                  data-bs-dismiss="modal"
                                ></button>
                              </div>
                              <div className="modal-body">
                                <input
                                  type="number"
                                  className="form-control"
                                  placeholder="Enter price"
                                  value={price}
                                  onChange={(e) => setPrice(e.target.value)}
                                />
                              </div>
                              <div className="modal-footer">
                                <button
                                  type="button"
                                  className="btn btn-secondary"
                                  data-bs-dismiss="modal"
                                >
                                  Close
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-primary"
                                  onClick={() => priceUpdate(item.id)}
                                  data-bs-dismiss="modal"
                                >
                                  Save
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          className="modal fade"
                          id={`${index}Quantity`}
                          tabIndex="-1"
                          aria-hidden="true"
                        >
                          <div className="modal-dialog">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h5 className="modal-title">
                                  Edit Quantity #{item.id}
                                </h5>
                                <button
                                  type="button"
                                  className="btn-close"
                                  data-bs-dismiss="modal"
                                ></button>
                              </div>
                              <div className="modal-body">
                                <p className="fw-bold">
                                  Current Quantity: {oldQuantity}
                                </p>
                                <input
                                  type="number"
                                  className="form-control"
                                  placeholder="Enter quantity"
                                  value={quantity}
                                  onChange={(e) => setQuantity(e.target.value)}
                                />
                              </div>
                              <div className="modal-footer">
                                <button
                                  type="button"
                                  className="btn btn-secondary"
                                  data-bs-dismiss="modal"
                                >
                                  Close
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-primary"
                                  onClick={() => updateQuantity(item.id)}
                                  data-bs-dismiss="modal"
                                >
                                  Save
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    ))}
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
