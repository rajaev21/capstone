import axios from "axios";
import { useState } from "react";

const DirectBuy = ({ item }) => {
  const [quantity, setQuantity] = useState("");
  const [discount, setDiscount] = useState("");
  const account = JSON.parse(localStorage.getItem("account"));

  function directBuy() {
    const data = {};
    if (quantity === "") {
      alert("Enter quantity");
      return;
    }
    if (quantity > item.qty) {
      alert("Not enough stocks");
      setQuantity(item.qty);
      return;
    }
    data.user_id = account.user_id;
    data.action = "directBuy";
    data.order = item;
    data.order.orderQty = quantity;
    data.discount = discount;
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
    <section>
      <div
        class="modal fade"
        id="directBuy"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="directBuyLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="directBuyLabel">
                Direct Buy
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div className="fs-3 text-center">Buy this item ?</div>
              <div className="row row-cols-2 text-center">
                <div className="text-capitalize">
                  <strong>brand : </strong> {item.brand}
                </div>
                <div className="text-capitalize">
                  <strong>type : </strong> {item.type}
                </div>
                <div className="text-capitalize">
                  <strong>color : </strong> {item.color}
                </div>
                <div className="text-capitalize">
                  <strong>size : </strong> {item.size}
                </div>
                <div className="text-capitalize">
                  <strong>qty : </strong> {item.qty}
                </div>
                <div className="text-capitalize">
                  <strong>price : </strong> {item.price}
                </div>
              </div>
              <div class="input-group mt-3">
                <span class="input-group-text" id="basic-addon1">
                  Quantity
                </span>
                <input
                  type="number"
                  class="form-control"
                  placeholder="Enter quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "-" || e.key === "+" || e.key === "e") {
                      e.preventDefault();
                    }
                  }}
                />
              </div>
              <div class="input-group mt-3">
                <span class="input-group-text" id="basic-addon1">
                  Discount :
                </span>
                <input
                  type="number"
                  class="form-control"
                  placeholder="Enter discount"
                  value={discount}
                  onChange={(e) => setDiscount(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "-" || e.key === "+" || e.key === "e") {
                      e.preventDefault();
                    }
                  }}
                />
              </div>
              <div className="text-center mt-3">
                <span className="fs-5 fw-bold">Total : </span>₱{" "}
                {quantity * (item.price + 10) - discount}
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                <i className="bi bi-x"></i>
              </button>
              <button
                type="button"
                class="btn btn-success"
                onClick={() => directBuy()}
              >
                <i className="bi bi-check"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DirectBuy;
