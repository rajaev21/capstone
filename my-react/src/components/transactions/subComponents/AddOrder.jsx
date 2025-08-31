import axios from "axios";
import { useState } from "react";
import NewInventory from "../../orders/NewInventory";
import OrderDetails from "./OrderDetails";

const AddOrder = ({ inventory, brand, color, transactionID }) => {
  const [order, setOrder] = useState([]);
  const data = {};

  function addOrder() {
    if (order.length === 0) {
      alert("Add order");
      return;
    }

    data.action = "addOrder";
    data.transactionID = transactionID;
    data.order = order;
    console.log(data);

    axios
      .post("http://localhost/capstone/submit.php", data, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        console.log(response.data);
        alert("Order submitted successfully");
        window.location.reload();
      })
      .catch((error) => {
        console.error("There was an error submitting the order!", error);
      });
  }

  return (
    <div
      class="modal fade"
      id="addOrder"
      tabindex="-1"
      aria-labelledby="addOrderLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="addOrderLabel">
              Add Order
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div className="row">
              <div className="col">
                <NewInventory
                  inventory={inventory}
                  brand={brand}
                  color={color}
                  setOrder={setOrder}
                  order={order}
                />
              </div>
              <div className="col-4">
                <div className="fs-5">Transaction ID: {transactionID} </div>
                {order.length > 0 && (
                  <OrderDetails
                    inventory={inventory}
                    order={order}
                    setOrder={setOrder}
                  />
                )}
              </div>
            </div>
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
              onClick={() => addOrder()}
            >
              Add Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddOrder;
