import axios from "axios";
import { use, useState } from "react";
import AddColor from "./AddColor";
// import DeleteColor from "./DeleteColor";
// import DeleteSize from "./DeleteSize";

const AddType = ({
  option,
  selected,
  exsistingType,
  fetchInventory,
  fetchType,
  closeCollapse,
  color,
  getHex,
  getContrastColor,
  size,
  brand,
  type,
  fetchColor,
  fetchSize,
}) => {
  const [addInput, setAddInput] = useState("");
  const [newSize, setNewSize] = useState("");
  const [isAddNewSize, setIsAddNewSize] = useState(false);
  const [isAddNewColor, setIsAddNewColor] = useState(false);
  const [selectInput, setselectInput] = useState(true);
  const [colors, setColors] = useState([]);
  const [sizes, setSizes] = useState([]);
  const data = {};
  const newOption =
    Array.isArray(exsistingType) && Array.isArray(option)
      ? option.filter(
          (item) => !exsistingType.some((type) => type.type === item.type_name)
        )
      : [];

  function checkValidation() {
    const value = addInput.toLocaleLowerCase().trim();
    if (!value) {
      alert("Choose type first");
      return;
    }
    if (colors.length === 0 || sizes.length === 0) {
      alert("Select colors and sizes");
      return;
    }

    data.action = "addType";
    data.sizes = sizes;
    data.colors = colors;
    data.type = value;
    data.brand = selected.brand;
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
        reset();
      })
      .then(() => {
        document.querySelector(`#type-close`)?.click();
      })
      .catch((err) => console.error("Error adding option:", err));
  }

  function addColor(color_id) {
    setColors((prev) => {
      const matchColor = prev.find((item) => item.color_id === color_id);
      if (matchColor) {
        return prev.filter((item) => item.color_id !== color_id);
      } else {
        return [...prev, { color_id }];
      }
    });
  }

  function addSize(size_id) {
    setSizes((prev) => {
      const matchSize = prev.find((item) => item.size_id === size_id);
      if (matchSize) {
        return prev.filter((item) => item.size_id !== size_id);
      } else {
        return [...prev, { size_id }];
      }
    });
  }

  function addNewSize() {
    const value = newSize.toLocaleLowerCase().trim();
    const matchSize = size.find((item) => value === item.size_name);
    if (!value) {
      alert("New size cant be empty");
      return;
    }
    if (matchSize) {
      alert("Size already existed");
      return;
    }
    data.action = "addSize";
    data.value = value;

    axios
      .post("http://localhost/capstone/submit.php", data, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        console.log(res.data);
        reset();
      })
      .catch((err) => console.error("Error adding size:", err));
  }

  function reset() {
    fetchInventory();
    fetchType();
    fetchSize();
    setAddInput("");
    closeCollapse();
    setColors([]);
    setSizes([]);
    setNewSize("");
    setIsAddNewSize(false);
  }

  return (
    <section>
      <div
        className="modal fade"
        id="type"
        tabIndex="-1"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5 text-capitalize" id="type">
                Add type
              </h1>
            </div>
            <div className="modal-body">
              {/* body */}
              <div className="row">
                <div className="input-group flex-nowrap">
                  <span className="input-group-text" id="addon-wrapping">
                    <button
                      className="btn btn-secondary"
                      onClick={() => {
                        setselectInput((prev) => !prev);
                        setAddInput("");
                      }}
                    >
                      {!selectInput
                        ? `Click here to choose existing type`
                        : `Click here to enter new type`}
                    </button>
                  </span>
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
                            return (
                              <option key={index} value={item.type_name}>
                                {item.type_name}
                              </option>
                            );
                          })}
                      </select>
                      <label htmlFor="floatingSelect">
                        Select an existing type here
                      </label>
                    </div>
                  ) : (
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="add"
                        placeholder="type"
                        value={addInput}
                        onChange={(e) => setAddInput(e.target.value)}
                      />
                      <label htmlFor="add">Add type name </label>
                    </div>
                  )}
                </div>
              </div>
              {/* Sizes */}
              <div className="fs-3 fw-bold text-center mb-2">
                Sizes
                <button
                  type="button"
                  className="btn btn-transparent"
                  onClick={() => {
                    setIsAddNewSize((prev) => !prev);
                    setNewSize("");
                  }}
                >
                  {isAddNewSize ? (
                    <i className="bi bi-dash-circle"></i>
                  ) : (
                    <i className="bi bi-plus-circle"></i>
                  )}
                </button>
              </div>
              <div>
                {isAddNewSize ? (
                  <div className="input-group mb-3">
                    <span className="input-group-text text-capitalize fs-5">
                      Size :
                    </span>
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="add"
                        placeholder="Add new Size"
                        value={newSize}
                        onChange={(e) => setNewSize(e.target.value)}
                      />
                      <label for="add">Add new size name </label>
                    </div>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        setIsAddNewSize((prev) => !prev);
                        setNewSize("");
                      }}
                    >
                      Cancel
                    </button>
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        addNewSize();
                      }}
                    >
                      Add
                    </button>
                  </div>
                ) : (
                  <div>
                    <div className="p text-center">Select sizes here</div>
                    <div className="list-group list-group-horizontal row row-cols-3">
                      {size.map((size) => {
                        const matchSize = sizes.find(
                          (item) => item.size_id === size.size_id
                        );
                        return (
                          <button
                            className="list-group-item flex-fill border border-3"
                            onClick={() => {
                              addSize(size.size_id);
                            }}
                          >
                            <span className="fw-bold text-uppercase">
                              {matchSize && (
                                <i className="bi bi-check-circle me-2"></i>
                              )}
                              {size.size_name}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
              {/* end sizes */}
              {/* start color */}
              <div className="fs-3 fw-bold text-center mb-2">
                Colors
                <button
                  type="button"
                  className="btn btn-transparent"
                  onClick={() => {
                    setIsAddNewColor((prev) => !prev);
                    setNewSize("");
                  }}
                >
                  {isAddNewColor ? (
                    <i className="bi bi-dash-circle"></i>
                  ) : (
                    <i className="bi bi-plus-circle"></i>
                  )}
                </button>
              </div>

              {isAddNewColor ? (
                <AddColor
                  title={"color"}
                  selected={selected}
                  brands={brand}
                  types={type}
                  colors={color}
                  exsistingType={colors}
                  fetchInventory={fetchInventory}
                  fetchColor={fetchColor}
                  setIsAddNewColor={setIsAddNewColor}
                />
              ) : (
                <div>
                  {" "}
                  <div className="p text-center">Select colors here</div>
                  <div className="list-group list-group-horizontal row row-cols-4">
                    {color.map((color) => {
                      const matchColor = colors.find(
                        (item) => item.color_id === color.color_id
                      );
                      return (
                        <button
                          className="list-group-item flex-fill border border-3"
                          style={{
                            backgroundColor: getHex(color.color_name),
                          }}
                          onClick={() => {
                            addColor(color.color_id);
                          }}
                        >
                          <span
                            className="fw-bold text-capitalize"
                            style={{
                              color: getContrastColor(color.color_name),
                            }}
                          >
                            {matchColor && (
                              <i className="bi bi-check-circle me-2"></i>
                            )}
                            {color.color_name}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* end color */}
              {/* end body */}
            </div>
            {!isAddNewColor && !isAddNewSize && (
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  id="type-close"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => checkValidation()}
                >
                  Save changes
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* <DeleteSize
        title={"size"}
        selected={selected}
        brands={brand}
        types={type}
        colors={color}
        sizes={size}
        fetchInventory={fetchInventory}
        fetchSize={fetchSize}
      />
      <DeleteColor
        selected={selected}
        brands={brand}
        types={type}
        colors={color}
        sizes={size}
        fetchInventory={fetchInventory}
        fetchColor={fetchColor}
        setSelected={setSelected}
      /> */}
    </section>
  );
};

export default AddType;
