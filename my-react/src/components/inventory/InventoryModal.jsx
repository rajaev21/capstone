import React, { useState } from "react";
import $ from "jquery";

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
    <div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="container d-flex mt-2">
              <input type="button" onClick={addForm} value="Add Item" />
              <input
                type="button"
                onClick={handleClearItems}
                value="Clear items"
                className="ms-auto"
              />
            </div>
            <div className="modal-body">
              {form &&
                Object.entries(form).map(([key, values]) => (
                  <div key={key} className="container mt-2">
                    <select
                      name="brand"
                      onChange={(e) =>
                        handleChange(key, "brand", e.target.value)
                      }
                    >
                      <option value="" default>
                        Select Brand
                      </option>
                      {Array.isArray(brand) &&
                        brand.map((item) => (
                          <option value={item.brand_id}>
                            {" "}
                            {item.brand_name}
                          </option>
                        ))}
                    </select>
                    <select
                      name="type"
                      onChange={(e) =>
                        handleChange(key, "type", e.target.value)
                      }
                    >
                      <option value="" default>
                        Select Type
                      </option>
                      {Array.isArray(type) &&
                        type.map((item) => (
                          <option value={item.type_id}>
                            {" "}
                            {item.type_name}
                          </option>
                        ))}
                    </select>
                    <select
                      name="color"
                      onChange={(e) =>
                        handleChange(key, "color", e.target.value)
                      }
                    >
                      <option value="" default>
                        Select Color
                      </option>
                      {Array.isArray(color) &&
                        color.map((item) => (
                          <option value={item.color_id}>
                            {" "}
                            {item.color_name}
                          </option>
                        ))}
                    </select>
                    <select
                      name="size"
                      onChange={(e) =>
                        handleChange(key, "size", e.target.value)
                      }
                    >
                      <option value="" default>
                        Select Size
                      </option>
                      {Array.isArray(size) &&
                        size.map((item) => (
                          <option value={item.size_id}>
                            {" "}
                            {item.size_name}
                          </option>
                        ))}
                    </select>
                    <p>
                      {" "}
                      Quantity:
                      <input
                        type="number"
                        name="qty"
                        value={values.qty}
                        onChange={(e) =>
                          handleChange(key, "qty", e.target.value)
                        }
                      />
                      <button onClick={() => handleDelete(key)}>Delete</button>
                    </p>
                  </div>
                ))}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={validateForm}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryModal;
