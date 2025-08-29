import React from "react";
import { PlusCircle, Trash, XCircle } from "react-bootstrap-icons";

const InventoryModal = ({
  addForm,
  form,
  handleChange,
  handleDelete,
  validateForm,
  handleClearItems,
  brand,
  type,
  color,
  size,
}) => {
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content shadow-lg border-0">
          <div className="modal-header bg-primary text-white">
            <h5 className="modal-title fw-bold" id="exampleModalLabel">
              Inventory Management
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <div className="d-flex align-items-center p-3 border-bottom">
            <button className="btn btn-success me-2" onClick={addForm}>
              <PlusCircle className="me-1" /> Add Item
            </button>
            <button
              className="btn btn-outline-danger ms-auto"
              onClick={handleClearItems}
            >
              <XCircle className="me-1" /> Clear All
            </button>
          </div>

          <div className="modal-body">
            {form && Object.entries(form).map(([key, values]) => (
              <div
                key={key}
                className="row g-2 align-items-end mb-3 border-bottom pb-3"
              >
                <div className="col-md-3">
                  <label className="form-label">Brand</label>
                  <select
                    className="form-select form-select-sm"
                    value={values.brand || ""}
                    onChange={(e) => handleChange(key, "brand", e.target.value)}
                  >
                    <option value="">Select Brand</option>
                    {brand?.map((item) => (
                      <option key={item.brand_id} value={item.brand_id}>
                        {item.brand_name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="col-md-2">
                  <label className="form-label">Type</label>
                  <select
                    className="form-select form-select-sm"
                    value={values.type || ""}
                    onChange={(e) => handleChange(key, "type", e.target.value)}
                  >
                    <option value="">Select Type</option>
                    {type?.map((item) => (
                      <option key={item.type_id} value={item.type_id}>
                        {item.type_name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="col-md-2">
                  <label className="form-label">Color</label>
                  <select
                    className="form-select form-select-sm"
                    value={values.color || ""}
                    onChange={(e) => handleChange(key, "color", e.target.value)}
                  >
                    <option value="">Select Color</option>
                    {color?.map((item) => (
                      <option key={item.color_id} value={item.color_id}>
                        {item.color_name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="col-md-2">
                  <label className="form-label">Size</label>
                  <select
                    className="form-select form-select-sm"
                    value={values.size || ""}
                    onChange={(e) => handleChange(key, "size", e.target.value)}
                  >
                    <option value="">Select Size</option>
                    {size?.map((item) => (
                      <option key={item.size_id} value={item.size_id}>
                        {item.size_name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="col-md-2">
                  <label className="form-label">Qty</label>
                  <input
                    type="number"
                    className="form-control"
                    value={values.qty || ""}
                    onChange={(e) => handleChange(key, "qty", e.target.value)}
                    min="0"
                  />
                </div>

                <div className="col-auto">
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => handleDelete(key)}
                  >
                    <Trash />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="modal-footer border-top">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={validateForm}
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryModal;
