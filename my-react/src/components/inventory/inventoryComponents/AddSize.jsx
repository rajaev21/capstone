import axios from "axios";
import { useState } from "react";

const AddSize = ({
  title,
  selected,
  brands,
  types,
  colors,
  sizes,
  exsistingSize,
  fetchInventory,
  fetchSize,
}) => {
  const [addInput, setAddInput] = useState("");
  const [selectInput, setselectInput] = useState(true);
  const optionName = `${title}_name`;
  const data = {};

  const newOption =
    Array.isArray(exsistingSize) && Array.isArray(sizes)
      ? sizes.filter(
          (item) => !exsistingSize.some((size) => size.size === item.size_name)
        )
      : [];

  function checkValidation() {
    const value = addInput.trim().toLowerCase();
    const checkDuplicate =
      Array.isArray(sizes) && sizes.some((item) => item[optionName] === value);

    var brand_id =
      Array.isArray(brands) &&
      brands.find((item) => item.brand_name === selected.brand).brand_id;
    var type_id =
      Array.isArray(types) &&
      types.find((item) => item.type_name === selected.type).type_id;
    var color_id =
      Array.isArray(colors) &&
      colors.find((item) => item.color_name === selected.color).color_id;

    if (value === "") {
      alert("Put or select a color");
      return;
    }
    if (!selectInput) {
      if (checkDuplicate) {
        alert(`${addInput} already exist`);
        return;
      }
      data.action = "insertOption";
      data.value = value;
      data.table = title;
      data.brand = brand_id;
      data.color = color_id;
      data.type = type_id;
    }

    if (selectInput) {
      if (value === "select") {
        alert(`Please select a color`);
        return;
      }

      data.action = "insertBrandTypeColorSize";
      data.brand = brand_id;
      data.type = type_id;
      data.color = color_id;
      data.size = value;
    }
    // console.log(data, checkDuplicate, selectInput);
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
    fetchSize();
    fetchInventory();
    setAddInput("")
  }

  return (
    <section>
      <div
        className="modal fade"
        id="size"
        tabIndex="-1"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1
                className="modal-title fs-5 text-capitalize"
                id="addSizeLabel"
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
                {["type", "size", "color"].some((item) => item === title) && (
                  <button
                    className="btn btn-secondary ms-auto"
                    onClick={() => {
                      setselectInput((prev) => !prev);
                      reset();
                    }}
                  >
                    {!selectInput
                      ? `Click here to choose existing ${title}`
                      : `Click here to enter new ${title}`}
                  </button>
                )}
                <hr />

                {selectInput ? (
                  <div className="form-floating">
                    <select
                      className="form-select"
                      id="floatingSelect"
                      aria-label="Floating label select example"
                      value={addInput}
                      onChange={(e) => setAddInput(e.target.value)}
                    >
                      <option selected>Select</option>
                      {Array.isArray(newOption) &&
                        newOption.map((item) => {
                          const name = `${title}_name`;
                          const itemid = `${title}_id`;
                          return (
                            <option value={item[itemid]}>{item[name]}</option>
                          );
                        })}
                    </select>
                    <label htmlFor="floatingSelect">
                      Select an existing {title} here
                    </label>
                  </div>
                ) : (
                  <div className="input-group mb-3">
                    <span className="input-group-text text-capitalize fs-5">
                      {title} :
                    </span>
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="add"
                        placeholder={title}
                        value={addInput}
                        onChange={(e) => setAddInput(e.target.value)}
                      />
                      <label for="add">Add {title} name </label>
                    </div>
                  </div>
                )}
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

export default AddSize;
