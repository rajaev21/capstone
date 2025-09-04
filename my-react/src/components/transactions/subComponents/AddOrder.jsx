import axios from "axios";
import { useState } from "react";
import NewInventory from "../../orders/NewInventory";
import OrderDetails from "./OrderDetails";

const AddOrder = ({
  inventory,
  brand,
  color,
  transactionID,
  printPrice,
  design,
}) => {
  const [order, setOrder] = useState([]);
  const [discount, setDiscount] = useState("");
  const data = {};
  const grandTotal = order.reduce(
    (sum, item) => sum + item.orderQty * (item.price + Number(printPrice)),
    0
  );

  function addOrder() {
    if (order.length === 0) {
      alert("Add order");
      return;
    }

    data.action = "addOrder";
    data.transactionID = transactionID;
    data.order = order;
    data.printPrice = printPrice;
    data.discount = discount;
    data.design = design;
    console.log(data);

    axios
      .post("http://localhost/capstone/submit.php", data, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        console.log(response.data);
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
                <div className="fs-6">Transaction ID: {transactionID} </div>
                <div className="fs-6">Print price : {printPrice} </div>
                <div className="fs-6">Print design : {design} </div>
                {order.length > 0 && (
                  <OrderDetails
                    inventory={inventory}
                    order={order}
                    setOrder={setOrder}
                  />
                )}

                <div class="input-group input-group-sm mb-3">
                  <span class="input-group-text" id="basic-addon1">
                    Discount :
                  </span>
                  <input
                    type="number"
                    class="form-control"
                    placeholder="Discount"
                    value={discount}
                    onChange={(e) => setDiscount(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "-" || e.key === "+" || e.key === "e") {
                        e.preventDefault();
                      }
                    }}
                  />
                </div>
                <div className="fs-5">
                  Grand total : {grandTotal - discount}
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-danger"
              data-bs-dismiss="modal"
            >
              <i className="bi bi-x"></i>
            </button>
            <button
              type="button"
              class="btn btn-success"
              onClick={() => addOrder()}
            >
              <i className="bi bi-check"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddOrder;
