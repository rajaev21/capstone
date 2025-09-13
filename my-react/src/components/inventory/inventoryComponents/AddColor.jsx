import axios from "axios";
import { useState } from "react";

const AddColor = ({
  title,
  selected,
  brands,
  types,
  colors,
  exsistingType,
  fetchInventory,
  fetchColor,
}) => {
  const [addInput, setAddInput] = useState("");
  const [selectInput, setselectInput] = useState(true);
  const [hex, setHex] = useState("#ffffff");
  const [image, setImage] = useState(null);
  const optionName = `${title}_name`;
  const optionHex = `${title}`;
  const data = {};
  const newOption =
    Array.isArray(exsistingType) && Array.isArray(colors)
      ? colors.filter(
          (item) =>
            !exsistingType.some((color) => color.color === item.color_name)
        )
      : [];

  function checkValidation() {
    const value = addInput.trim().toLowerCase();
    const checkDuplicate =
      Array.isArray(colors) &&
      colors.some((item) => item[optionName] === value);
    const checkHex =
      Array.isArray(colors) && colors.some((item) => item.hex === hex);
    var brand_id = brands.find(
      (item) => item.brand_name === selected.brand
    ).brand_id;
    var type_id = types.find(
      (item) => item.type_name === selected.type
    ).type_id;

    if (value === "") {
      alert("Put or select a color");
      return;
    }
    if (!selectInput) {
      if (checkDuplicate) {
        alert(`${addInput} already exist`);
        return;
      }
      if (checkHex) {
        alert(`Hex ${hex} already exist`);
        return;
      }
      data.action = "insertOption";
      data.value = value;
      data.table = title;
      data.brand = brand_id;
      data.type = type_id;
      data.hex = hex;
    }

    if (selectInput) {
      if (value === "select") {
        alert(`Please select a color`);
        return;
      }

      data.action = "insertBrandTypeColor";
      data.brand = brand_id;
      data.type = type_id;
      data.color = value;
    }
    console.log(data);
    insertData();
  }

  //   console.log(title, selected, brands, types, colors);

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

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  function reset() {
    setHex("#ffffff");
    setAddInput("");
    fetchInventory();
    fetchColor();
  }

  return (
    <section>
      <div
        className="modal fade"
        id="addColor"
        tabIndex="-1"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
      >
        <div className="modal-dialog modal-xl">
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
                onClick={() => {
                  setImage(null);
                  setHex("#ffffff");
                  setAddInput("");
                }}
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
                      setImage(null);
                      setHex("#ffffff");
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
                  <div className="row my-3 align-items-start">
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
                    <div className={`${image ? "col-md-6" : "col"}`}>
                      <label className="form-label fw-semibold text-capitalize">
                        Pick color :
                      </label>
                      <div className="input-group mb-3">
                        <input
                          type="color"
                          name="color"
                          className="form-control form-control-color"
                          style={{ maxWidth: "60px" }}
                          value={hex}
                          onChange={(e) => setHex(e.target.value)}
                          required
                        />
                        <span className="form-control input-group-text fw-bold text-uppercase">
                          {hex}
                        </span>
                      </div>

                      <label className="form-label fw-semibold text-capitalize">
                        Pick image for color picker :
                      </label>
                      <input
                        type="file"
                        name="image"
                        accept="image/*"
                        className="form-control"
                        onChange={handleFileChange}
                        required
                      />
                    </div>
                    {image && (
                      <div className="col-md-6 text-center">
                        <p className="fw-bold">Preview:</p>
                        <img
                          src={URL.createObjectURL(image)}
                          alt="preview"
                          className="img-thumbnail"
                          style={{ maxWidth: "100%", height: "auto" }}
                        />
                      </div>
                    )}
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

export default AddColor;
