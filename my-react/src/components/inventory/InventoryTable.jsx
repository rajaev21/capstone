import { useEffect, useState } from "react";
import $ from "jquery";
import "datatables.net-bs5";
import axios from "axios";

const InventoryTable = ({ inventory, fetch, fetchLogs }) => {
  const [search, setSearch] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const filteredItems =
    Array.isArray(inventory) &&
    inventory.filter((item) =>
      Object.values(item).some((val) =>
        String(val).toLowerCase().includes(search.toLowerCase())
      )
    );

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
          return
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
      <table className="table table-hover table-striped table-bordered">
        <thead className="table-light">
          <tr>
            <th>ID number</th>
            <th>Brand</th>
            <th>Type</th>
            <th>Color</th>
            <th>Size</th>
            <th>Quantity</th>
            <th>Price (PHP)</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredItems.length > 0 &&
            filteredItems.map((item, index) => (
              
              <tr key={index}>
                <td> {item.id}</td>
                <td> {item.brand}</td>
                <td> {item.type}</td>
                <td> {item.color}</td>
                <td> {item.size.toString().toUpperCase()}</td>
                <td> {item.qty}</td>
                <td> {item.price == 0 ? "No price set" : item.price}</td>
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
                              priceUpdate(item.id)
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
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryTable;
