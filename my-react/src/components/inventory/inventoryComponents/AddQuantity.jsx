import axios from "axios";
import { useState } from "react";

const AddQuantity = ({
  title,
  selected,
  brands,
  types,
  colors,
  sizes,
  fetchInventory,
}) => {
  const [addInput, setAddInput] = useState("");
  const [totalCost, setTotalCost] = useState("");
  const [optionInput, setOptionInput] = useState("");
  const data = {};

  function checkValidation() {
    const value = addInput.replace(/\D+/g, "").trim();
    const totalCostValue = totalCost.replace(/\D+/g, "").trim();

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

    if (optionInput === "") {
      alert("Select Stock Option");
      return;
    }

    if (value === "") {
      alert("Insert Quantity");
      return;
    }

    if (optionInput === "directPurchase") {
      if (totalCostValue === "") {
        alert("Insert total cost");
        setAddInput(value);
        setOptionInput("directPurchase");
        return;
      }
      data.remarks = "direct purchase";
    }

    if (optionInput === "supplierDelivery") {
      data.remarks = "supplier deliver";
    }

    data.action = "addQuantity";
    data.value = value;
    data.brand = brand_id;
    data.color = color_id;
    data.type = type_id;
    data.size = size_id;
    data.detail = "quantity added";

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
    setTotalCost("");
    setOptionInput("");
    fetchInventory();
  }
  const getTotal = () => {
    var total = Math.floor(parseInt(totalCost) / parseInt(addInput));
    return (
      <>
        <div className="row">
          <div className="col">
            <p class="text-capitalize">{`${selected.brand}-${selected.type}-${selected.color}-${selected.size}`}</p>
          </div>
          <div className="col text-end">
            <p class="fw-semibold">₱{total}.00 / each</p>
          </div>
        </div>
      </>
    );
  };

  const changeOption = () => {
    if (optionInput === "directPurchase") {
      return (
        <>
          <div className="fs-5 fw-bold text-center mb-3">Direct Purchase</div>
          <div className="input-group mb-3">
            <span className="input-group-text text-capitalize fs-5">
              {title} :
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
                onChange={(e) => {
                  setAddInput(e.target.value);
                }}
              />
              <label for="add">Enter Quantity</label>
            </div>
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text text-capitalize">Total cost</span>
            <span className="input-group-text text-capitalize fs-5 fw-bold">
              ₱
            </span>
            <div className="form-floating">
              <input
                type="number"
                className="form-control"
                id="totalCost"
                onKeyDown={(e) => {
                  if (e.key === "-" || e.key === "+") {
                    e.preventDefault();
                  }
                }}
                placeholder={title}
                value={totalCost}
                onChange={(e) => setTotalCost(e.target.value)}
              />
              <label for="totalCost">Enter Total Cost</label>
            </div>
          </div>
          {addInput && totalCost && getTotal()}
        </>
      );
    }

    if (optionInput === "supplierDelivery") {
      return (
        <>
          <div className="fs-5 fw-bold text-center mb-3">Supplier Delivery</div>
          <div className="input-group mb-3">
            <span className="input-group-text text-capitalize fs-5">
              {title} :
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
              <label for="add">Enter Quantity </label>
            </div>
          </div>
        </>
      );
    }

    return <div className="fs-5 fw-bold text-center">Select Stock Options</div>;
  };

  return (
    <section>
      <div
        className="modal fade"
        id="quantity"
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
                Add {title}
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
                <div className="form-floating">
                  <select
                    className="form-select"
                    id="floatingSelect"
                    aria-label="Floating label select example"
                    value={optionInput}
                    onChange={(e) => {
                      setOptionInput(e.target.value);
                      changeOption();
                      setAddInput("");
                      setTotalCost("");
                    }}
                  >
                    <option value="" selected>
                      Select stock option
                    </option>
                    <option value="directPurchase">Direct Purchase</option>
                    <option value="supplierDelivery">Supplier Delivery</option>
                  </select>
                  <label for="floatingSelect">Stock Option</label>
                </div>
                <hr />
                {changeOption()}
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

export default AddQuantity;
