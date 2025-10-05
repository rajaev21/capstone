import axios from "axios";
import { useState } from "react";

const AddColor = ({
  title,
  colors,
  fetchInventory,
  fetchColor,
  setIsAddNewColor,
}) => {
  const [addColor, setaddColor] = useState("");
  const [hex, setHex] = useState("#ffffff");
  const [image, setImage] = useState(null);
  const data = {};

  function checkValidation() {
    const value = addColor.trim().toLowerCase();
    const checkDuplicate = colors.some((item) => item.color_name === value);
    const checkHex = colors.some((item) => item.hex === hex);

    if (!value) {
      alert("Color name cant be empty");
      return;
    }
    if (checkDuplicate) {
      alert(`${addColor} already exist`);
      return;
    }
    if (checkHex) {
      alert(`Hex ${hex} already exist`);
      return;
    }
    data.action = "insertOption";
    data.value = value;
    data.table = title;
    data.hex = hex;

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
        setIsAddNewColor(false);
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
    setaddColor("");
    fetchInventory();
    fetchColor();
  }

  return (
    <section>
      {/* body */}
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
              value={addColor}
              onChange={(e) => setaddColor(e.target.value)}
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
          <div className="d-flex justify-content-end mt-2 gap-2">
            <button
              className="btn btn-danger"
              onClick={() => {
                reset();
                setIsAddNewColor(false);
              }}
            >
              Cancel
            </button>
            <button
              className="btn btn-primary"
              onClick={() => checkValidation()}
            >
              Add
            </button>
          </div>
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
      {/* end body */}
    </section>
  );
};

export default AddColor;
