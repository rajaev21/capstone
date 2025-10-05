import axios from "axios";
import { useState } from "react";

const Return = ({
  inventory,
  title,
  selected,
  brands,
  types,
  colors,
  sizes,
  fetchInventory,
  setItemReturn,
}) => {
  const [addInput, setAddInput] = useState("");
  const [remarks, setRemarks] = useState("");
  const data = {};

  function checkValidation() {
    var value = addInput.replace(/\D+/g, "").trim();
    const selectedInventory = inventory.find(
      (item) =>
        item.brand === selected.brand &&
        item.type === selected.type &&
        item.color === selected.color &&
        item.size === selected.size
    );
    var brand_id =
      Array.isArray(brands) &&
      brands.find((item) => item.brand_name === selected.brand).brand_id;
    var type_id =
      Array.isArray(types) &&
      types.find((item) => item.type_name === selected.type).type_id;
    var color_id =
      Array.isArray(colors) &&
      colors.find((item) => item.color_name === selected.color).color_id;
    var size_id =
      Array.isArray(sizes) &&
      sizes.find((item) => item.size_name === selected.size).size_id;

    if (value === "") {
      alert("Insert Quantity");
      return;
    }
    if (remarks === "") {
      alert("Enter for return reason");
      return;
    }
    if (selectedInventory.qty < value) {
      alert("Cannot return more than available stock!");
      setAddInput(String(selectedInventory.qty));
      return;
    }

    data.action = "returnItem";
    data.value = value;
    data.brand = brand_id;
    data.color = color_id;
    data.type = type_id;
    data.size = size_id;
    data.remarks = remarks;
    data.detail = "return item";

    console.log(addInput);
    insertData();
  }

  function insertData() {
    axios
      .post("http://localhost/capstone/submit.php", data, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        console.log(res.data);
        reset();
      })
      .then(() => {
        document.querySelector(`#btn-close`)?.click();
      })
      .catch((err) => console.error("Error adding option:", err));
  }

  function reset() {
    setAddInput("");
    setRemarks("");
    fetchInventory();
    setItemReturn(false);
  }

  return (
    <section>
      <div
        className="modal fade"
        id="return"
        tabIndex="-1"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1
                className="modal-title fs-5 text-capitalize"
                id="addColorLabel"
              >
                Return item
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">
              {/* body */}
              <section>
                <div className="fs-5 fw-bold text-center mb-3">
                  Return Damage Item
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text text-capitalize fs-5">
                    Return :
                  </span>
                  <div className="form-floating">
                    <input
                      type="number"
                      className="form-control"
                      id="add"
                      onKeyDown={(e) => {
                        if (e.key === "-" || e.key === "+" || e.key === "e") {
                          e.preventDefault();
                        }
                      }}
                      placeholder={title}
                      value={addInput}
                      onChange={(e) => setAddInput(e.target.value)}
                    />
                    <label htmlFor="add">Enter Quantity</label>
                  </div>
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text text-capitalize fs-5">
                    Reason :
                  </span>
                  <div class="form-floating">
                    <textarea
                      class="form-control"
                      placeholder="Leave a comment here"
                      id="floatingTextarea2"
                      name="remarks"
                      style={{ height: "100px" }}
                      value={remarks}
                      onChange={(e) => setRemarks(e.target.value)}
                    ></textarea>
                    <label htmlFor="floatingTextarea2">
                      Enter reason for return
                    </label>
                  </div>
                </div>
              </section>
              {/* end body */}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                id="btn-close"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  checkValidation();
                }}
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

export default Return;
