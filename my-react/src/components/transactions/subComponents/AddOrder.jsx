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
  setAddOrder,
}) => {
  const [order, setOrder] = useState([]);
  const [discount, setDiscount] = useState("");
  const data = {};
  const grandTotal = order.reduce(
    (sum, item) => sum + item.orderQty * item.price,
    0
  );

  function addOrder() {
    if (order.length === 0) {
      alert("Set addtional Order");
      setAddOrder((prev) => !prev);
      return;
    }

    data.action = "addOrder";
    data.transactionID = transactionID;
    data.order = order;
    data.printPrice = printPrice;
    data.discount = discount;
    data.design = design;

    axios
      .post("https://allsite.infy.click/backend/my-react.php", data, {
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
    <div className="row">
      <div className="col">
        <NewInventory
          inventory={inventory}
          color={color}
          setOrder={setOrder}
          order={order}
          transactionID={transactionID}
        />
      </div>
      <div className="col-4">
        <div className="fs-6">Transaction ID: {transactionID} </div>
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
          Grand total : {grandTotal && grandTotal - discount}
        </div>
      </div>

      <div className="my-2 d-flex gap-2 justify-content-end">
        <button
          type="button"
          class="btn btn-success"
          onClick={() => {
            addOrder();
            setAddOrder((prev) => !prev);
          }}
        >
          <i className="bi bi-check"></i>
        </button>
        <button
          type="button"
          class="btn btn-danger"
          onClick={() => setAddOrder((prev) => !prev)}
        >
          <i className="bi bi-x"></i>
        </button>
      </div>
    </div>
  );
};

export default AddOrder;
