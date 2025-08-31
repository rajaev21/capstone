import axios from "axios";
import { useState } from "react";

const Return = ({
  title,
  selected,
  brands,
  types,
  colors,
  sizes,
  fetchInventory,
}) => {
  const [addInput, setAddInput] = useState("");
  const [remarks, setRemarks] = useState("");
  const data = {};

  function checkValidation() {
    const value = addInput.replace(/\D+/g, "").trim();

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
      alert("Enter remarks");
    }

    data.action = "returnItem";
    data.value = value;
    data.brand = brand_id;
    data.color = color_id;
    data.type = type_id;
    data.size = size_id;
    data.remarks = remarks;
    data.detail = "return item"

    console.log(data);
    insertData();
  }

  function insertData() {
    axios
      .post("http://localhost/capstone/submit.php", data, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        console.log(res.data);
        alert("Item inserted");
        reset();
      })
      .catch((err) => console.error("Error adding option:", err));
  }

  function reset() {
    setAddInput("");
    setRemarks("");
    fetchInventory();
  }

  return (
    <section>
      <div
        className="modal fade"
        id="return"
        tabindex="-1"
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
                    <label for="add">Enter Quantity</label>
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
                    <label for="floatingTextarea2">
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
