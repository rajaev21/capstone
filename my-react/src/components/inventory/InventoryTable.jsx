import { useEffect, useState } from "react";
import axios from "axios";

const InventoryTable = ({ inventory, fetch, fetchLogs }) => {
  const role = localStorage.getItem("role");
  const [search, setSearch] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
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
        console.log(response.data);
        if (typeof response.data === "number") {
          fetch();
          fetchLogs();
          setPrice("");
        }
      })
      .catch((error) => console.log(error));
  };

  const deleteItem = (id, quantity) => {
    console.log("deleteItem", id, quantity);
    if (quantity <= 0) {
      const data = { action: "deleteInventory", id: id };
      axios
        .post("http://localhost/capstone/submit.php", data, {
          headers: { "Content-Type": "application/json" },
        })
        .then((response) => {
          console.log(response.data);
          fetch();
          fetchLogs();
          return;
        })
        .catch((error) => {
          console.log(error);
        });
    }

    alert(
      `Inventory ID #${id} cannot be deleted. Make sure the quantity of stock is 0`
    );
  };

  const updateQuantity = (id) => {
    const data = { action: "updateQuantity", id: id, value: quantity };

    axios
      .post("http://localhost/capstone/submit.php", data, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        console.log(response.data);
        if (typeof response.data === "number") {
          console.log(response);
          fetch();
          fetchLogs();
          setQuantity("");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
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
            <th>ID number</th>
            <th>Brand</th>
            <th>Type</th>
            <th>Color</th>
            <th>Size</th>
            <th>Quantity</th>
            <th>Price (PHP)</th>

            {role == 2 && role == 1 && <th>Action</th>}
          </tr>
        </thead>
        <tbody>
          {currentItems.length > 0 &&
            currentItems.map((item, index) => (
              <tr key={index}>
                <td> {item.id}</td>
                <td> {item.brand}</td>
                <td> {item.type}</td>
                <td> {item.color}</td>
                <td> {item.size.toString().toUpperCase()}</td>
                <td> {item.qty}</td>
                <td> {item.price == 0 ? "No price set" : item.price}</td>
                {role == 2 && role == 1 && (
                  <td>
                    <p>
                      <button
                        type="button"
                        class="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target={`#${index}Price`}
                      >
                        {item.price == 0 ? "Set Price" : "Edit Price"}
                      </button>

                      <button
                        type="button"
                        class="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target={`#${index}Quantity`}
                        onClick={() => setQuantity(item.qty)}
                      >
                        Edit Quantity
                      </button>

                      <button
                        onClick={() => deleteItem(item.id, item.qty)}
                        type="button"
                        class="btn btn-danger"
                      >
                        Delete Item
                      </button>
                    </p>

                    <div
                      class="modal fade"
                      id={`${index}Price`}
                      tabindex="-1"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">
                              Set Price {item.id}
                            </h5>
                            <button
                              type="button"
                              class="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div class="modal-body">
                            {item.price == 0 ? "Set Price: " : "Edit Price: "}

                            <input
                              type="text"
                              name="price"
                              value={price}
                              onChange={(e) => setPrice(e.target.value)}
                            />
                          </div>
                          <div class="modal-footer">
                            <button
                              type="button"
                              class="btn btn-secondary"
                              data-bs-dismiss="modal"
                            >
                              Close
                            </button>
                            <button
                              type="button"
                              class="btn btn-primary"
                              onClick={(e) => {
                                priceUpdate(item.id);
                              }}
                              data-bs-dismiss="modal"
                            >
                              Save changes
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Edit quantity */}

                    <div
                      class="modal fade"
                      id={`${index}Quantity`}
                      tabindex="-1"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">
                              Edit Quantity #{item.id}
                            </h5>
                            <button
                              type="button"
                              class="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div class="modal-body">
                            Edit Quantity:
                            <input
                              type="text"
                              name="quantity"
                              value={quantity}
                              onChange={(e) => setQuantity(e.target.value)}
                            />
                          </div>
                          <div class="modal-footer">
                            <button
                              type="button"
                              class="btn btn-secondary"
                              data-bs-dismiss="modal"
                            >
                              Close
                            </button>
                            <button
                              type="button"
                              class="btn btn-primary"
                              onClick={(e) => updateQuantity(item.id)}
                              data-bs-dismiss="modal"
                            >
                              Submit Quantity
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                )}
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

export default InventoryTable;
