import axios from "axios";
import { useState } from "react";

const AddPrice = ({
  title,
  selected,
  brands,
  types,
  colors,
  sizes,
  fetchInventory,
}) => {
  const [addInput, setAddInput] = useState("");
  const optionName = `${title}_name`;
  const data = {};

  function checkValidation() {
    const value = addInput.replace(/\D+/g, "").trim().toLowerCase();

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
      alert("Please input price");
      return;
    }

    data.action = "setPrice";
    data.brand = brand_id;
    data.type = type_id;
    data.size = size_id;
    data.color = color_id;
    data.value = value;
    console.log(data);
    insertData();
  }

  //   console.log(title, selected, brands, types, colors, exsistingSize);

  function insertData() {
    axios
      .post("http://localhost/capstone/submit.php", data, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        console.log(res.data);
        reset();
      })
      .catch((err) => console.error("Error adding option:", err));
  }

  function reset() {
    setAddInput("");
    fetchInventory("");
  }

  return (
    <section>
      <div
        className="modal fade"
        id="price"
        tabindex="-1"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1
                className="modal-title fs-5 text-capitalize"
                id="addPriceLabel"
              >
                Add {title}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                onClick={() => reset()}
              ></button>
            </div>
            <div className="modal-body">
              {/* body */}
              <section>
                <div className="input-group mb-3">
                  <span className="input-group-text text-capitalize fs-5">
                    {title}
                  </span>
                  <span className="input-group-text text-capitalize fs-5">
                    ₱
                  </span>
                  <div className="form-floating">
                    <input
                      type="number"
                      className="form-control"
                      id="add"
                      onKeyDown={(e) => {
                        if (e.key === "-" || e.key === "+") {
                          e.preventDefault();
                        }
                      }}
                      placeholder={title}
                      value={addInput}
                      onChange={(e) => setAddInput(e.target.value)}
                    />
                    <label for="add">Set {title} </label>
                  </div>
                </div>
              </section>
              {/* end body */}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => checkValidation()}
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
