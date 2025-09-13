import axios from "axios";
import { useState } from "react";

const AddType = ({
  title,
  option,
  selected_brand,
  exsistingType,
  fetchInventory,
  fetchType,
  closeCollapse,
}) => {
  const [addInput, setAddInput] = useState("");
  const [selectInput, setselectInput] = useState(true);
  const optionName = `${title}_name`;
  const data = {};
  const newOption =
    Array.isArray(exsistingType) && Array.isArray(option)
      ? option.filter(
          (item) => !exsistingType.some((type) => type.type === item.type_name)
        )
      : [];

  //if input text add input to the type table and add to the inventory

  function checkValidation() {
    const value = addInput.trim().toLowerCase();
    const checkDuplicate =
      Array.isArray(option) &&
      option.some((item) => item[optionName] === value);

    if (value === "") {
      alert("Input or select color");
      return;
    }
    if (!selectInput) {
      if (checkDuplicate) {
        alert(`${addInput} already exist. Please select in the option`);
        return;
      }
      data.action = "insertOption";
      data.value = value;
      data.table = title;
      data.brand = selected_brand.brand_id;
    }

    if (selectInput) {
      if (value === "select") {
        alert(`Please select a color`);
        return;
      }
      data.action = "insertBrandType";
      data.brand = selected_brand.brand_id;
      data.type = value;
    }
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
      .catch((err) => console.error("Error adding option:", err));
  }

  function reset() {
    fetchInventory();
    fetchType();
    setAddInput("");
    closeCollapse();
  }

  // console.log(exsistingType, option, newOption);

  return (
    <section>
      <div
        className="modal fade"
        id={title}
        tabIndex="-1"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5 text-capitalize" id={title}>
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
                {["type", "size", "color"].some((item) => item === title) && (
                  <button
                    className="btn btn-secondary ms-auto"
                    onClick={() => {
                      setselectInput((prev) => !prev);
                      setAddInput("");
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
                        newOption.map((item, index) => {
                          const name = `${title}_name`;
                          const itemid = `${title}_id`;
                          return (
                            <option key={index} value={item[itemid]}>
                              {item[name]}
                            </option>
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
                      <label htmlFor="add">Add {title} name </label>
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

export default AddType;
