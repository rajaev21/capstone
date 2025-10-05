import { useState } from "react";

const AddPrice = ({ item, setOrder }) => {
  const [price, setPrice] = useState("");
  const [orderQty, setOrderQty] = useState("");
  function validatePrice(item) {
    if (price === "" || isNaN(Number(price))) {
      alert("Please enter a valid price");
      return;
    }

    if (item.qty < orderQty) {
      alert("The order amount is more than what's in stock.");
      return;
    }

    setOrder((prev) => [
      ...prev,
      { ...item, orderQty: orderQty, price: price },
    ]);

    setPrice("");
    setOrderQty("");
    document.querySelector(`#btn-close`)?.click();
  }

  return (
    <section>
      <div
        className="modal fade"
        id="setPrice"
        tabIndex="-1"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5 text-capitalize">set price</h1>
            </div>
            <div className="modal-body">
              {/* body */}
              <h5 className="text-center">Stocks : {item.qty} pcs </h5>
              <div class="input-group mb-3">
                <span class="input-group-text"> Quantity :</span>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Set quantity"
                  value={orderQty}
                  onChange={(e) => setOrderQty(e.target.value)}
                  min="0"
                  onKeyDown={(e) => {
                    if (e.key === "-" || e.key === "+" || e.key === "e") {
                      e.preventDefault();
                    }
                  }}
                />
              </div>

              <div class="input-group mb-3">
                <span class="input-group-text">Price :</span>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Set price each order"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  min="0"
                  onKeyDown={(e) => {
                    if (e.key === "-" || e.key === "+" || e.key === "e") {
                      e.preventDefault();
                    }
                  }}
                />
              </div>
            </div>
            {/* end body */}
            <div className="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                id="btn-close"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => validatePrice(item)}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddPrice;
