import axios from "axios";
import { useState } from "react";
import { Modal } from "bootstrap";

const AddBrand = ({ title, option, fetchInventory, fetchBrand }) => {
  const [addInput, setAddInput] = useState("");
  const optionName = `${title}_name`;
  const data = {};

  function checkValidation() {
    const value = addInput.trim().toLowerCase();
    const checkDuplicate = option.some((item) => item[optionName] === value);

    console.log(checkDuplicate);
    if (checkDuplicate) {
      alert(`${addInput} already exist`);
      return;
    }
    data.action = "insertOption";
    data.value = value;
    data.table = title;

    console.log(data);
    insertData();
  }

  function reset() {
    fetchInventory();
    fetchBrand();
    setAddInput("");
  }

  function insertData() {
    axios
      .post("http://localhost/capstone/submit.php", data, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        console.log(res.data);
        reset();
        document.querySelector(`#${title} .btn-close`)?.click();
      })
      .catch((err) => console.error("Error adding option:", err));
  }

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
                onClick={() => reset()}
              ></button>
            </div>
            <div className="modal-body">
              {/* body */}
              <section>
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

export default AddBrand;
