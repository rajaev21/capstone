import React, { use, useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import $, { easing } from "jquery";

const AddBrand = ({
  brand,
  setBrand,
  size,
  setSize,
  color,
  setColor,
  type,
  setType,
  setDoFetch,
  fetchColor,
  fetchType,
  fetchSize,
}) => {
  const [counter, setCounter] = useState({ type: 0, color: 0, size: 0 });
  const [settings, setSettings] = useState({
    brand: "",
    type: {
      a_type: "",
      color: {
        color: "",
        size: {
          size: "",
        },
      },
    },
  });
  const [otherInput, setOtherInput] = useState("");
  const [otherSelect, setOtherSelect] = useState("");


  const changeBrand = (e) => {
    const { value, name } = e.target;
    setSettings((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const changeType = (e, settingsKey, settingsValue) => {
    const { value, name } = e.target;
    const isSelected = Object.values(settings)?.find((item) => item.a_type === value);
    if(!isSelected){
      setSettings((prev) => ({
        ...prev,
        [settingsKey]: { ...prev[settingsKey], [name]: value },
      }));
      return
    }

    const selectedItem = type.find((item) => item.type_id === Number(value));
    alert(`${selectedItem.type_name} is already selected.`);
  };

  const changeColor = (e, settingsKey, typeKey) => {
    const { value, name } = e.target;
    const isSelected = Object.values(settings[settingsKey])?.find(
      (item) => item.color === value
    );
    if (!isSelected) {
      setSettings((prev) => ({
        ...prev,
        [settingsKey]: {
          ...prev[settingsKey],
          [typeKey]: { ...prev[settingsKey][typeKey], [name]: value },
        },
      }));
      return;
    }
    const selectedItem = color.find((item) => item.color_id === Number(value));
    alert(`Color ${selectedItem.color_name} is already selected.`);
  };

  const changeSize = (e, settingsKey, typeKey, colorKey) => {
    const { value, name } = e.target;
    const isSelected = Object.values(settings[settingsKey][typeKey])?.find(
      (item) => item.size === value
    );
    console.log(isSelected)
    if (!isSelected) {
      setSettings((prev) => ({
        ...prev,
        [settingsKey]: {
          ...prev[settingsKey],
          [typeKey]: {
            ...prev[settingsKey][typeKey],
            [colorKey]: {
              ...prev[settingsKey][typeKey][colorKey],
              [name]: value,
            },
          },
        },
      }));
      return;
    }
    const selectedItem = size.find((item) => item.size_id === Number(value));
    alert(`Size ${selectedItem.size_name} is already selected.`);
  };

  const clearSettings = () => {
    setSettings({
      brand: "",
      type: {
        a_type: "",
        color: {
          color: "",
          size: {
            size: "",
          },
        },
      },
    });
    setCounter({ type: 0, color: 0, size: 0 });
    setOtherInput("");
    setOtherSelect("");
  };

  const addType = () => {
    const newCounter = `type_${counter.type}`;
    setSettings((prev) => ({
      ...prev,
      [newCounter]: {
        a_type: "",
        color: {
          color: "",
          size: {
            size: "",
          },
        },
      },
    }));
    setCounter((prev) => ({ ...prev, type: prev.type + 1 }));
  };

  const addColor = (type) => {
    const newCounter = `color_${counter.color}`;
    setSettings((prev) => ({
      ...prev,
      [type]: {
        ...prev[type],
        [newCounter]: {
          color: "",
          size: {
            size: "",
          },
        },
      },
    }));
    setCounter((prev) => ({ ...prev, color: prev.color + 1 }));
  };

  const addSize = (type, color) => {
    const newCounter = `size_${counter.size}`;
    setSettings((prev) => ({
      ...prev,
      [type]: {
        ...prev[type],
        [color]: {
          ...prev[type][color],
          size: { ...prev[type][color].size, [newCounter]: "" },
        },
      },
    }));
    setCounter((prev) => ({ ...prev, size: prev.size + 1 }));
  };

  const removeType = (settingsKey) => {
    setSettings((prev) => {
      {
        const { [settingsKey]: _, ...rest } = prev;
        return rest;
      }
    });
  };

  const removeColor = (typeKey, colorKey) => {
    setSettings((prev) => {
      const typeGroup = prev[typeKey];
      const { [colorKey]: _, ...restColors } = typeGroup;

      return {
        ...prev,
        [typeKey]: restColors,
      };
    });
  };

  const removeSize = (settingsKey, typeKey, colorKey, sizeKey) => {
    setSettings((prev) => {
      const group = prev[settingsKey][typeKey][colorKey];
      const { [sizeKey]: _, ...restColors } = group;

      console.log(group);
      return {
        ...prev,
        [settingsKey]: {
          ...prev[settingsKey],
          [typeKey]: {
            ...prev[settingsKey][typeKey],
            size: restColors,
          },
        },
      };
    });
  };

  const handleValidation = () => {
    for (const settingsValue of Object.values(settings)) {
      if (typeof settingsValue === "string" && settingsValue === "") {
        alert("Please fill out brand");
        return;
      }

      if (typeof settingsValue === "object" && settingsValue !== null) {
        for (const typeValue of Object.values(settingsValue)) {
          if (typeof typeValue === "string" && typeValue === "") {
            alert("Please fill out or remove type of shirt");
            return;
          }

          if (typeof typeValue === "object" && typeValue !== null) {
            for (const colorValue of Object.values(typeValue)) {
              if (typeof colorValue === "string" && colorValue === "") {
                alert("Please fill out or remove the colors");
                return;
              }

              if (typeof colorValue === "object" && colorValue !== null) {
                for (const sizeValue of Object.values(colorValue)) {
                  if (typeof sizeValue === "string" && sizeValue === "") {
                    alert("Please fill out or remove the sizes");
                    return;
                  }
                }
              }
            }
          }
        }
      }
    }
    saveSettings();
  };

  const saveSettings = () => {
    const formData = { action: "saveSettings", settings };
    axios
      .post("http://localhost/capstone/submit.php", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response.data);
      });
  };

  const addOtherToType = () => {
    let input =
      otherSelect === "size"
        ? otherInput.trim().toUpperCase()
        : otherInput.trim().toLowerCase();

    const existingType = type.find((item) => item.type_name === input);
    const existingColor = color.find((item) => item.color_name === input);
    const existingSize = size.find((item) => item.size_name === input);

    if (otherSelect === "") {
      alert("Select option");
      return;
    }
    if (input === "") {
      alert("Fill the input");
      return;
    }

    if (existingType || existingColor || existingSize) {
      alert(`${input} already existed in the dropdown`);
      return;
    }

    const data = {
      action: "insertShirtOption",
      shirtOptionType: otherSelect,
      shirtOptionValue: input,
    };
    axios
      .post("http://localhost/capstone/submit.php", data, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        if (response && otherSelect === "size") {
          fetchSize();
        }
        if (response && otherSelect === "color") {
          fetchColor();
        }
        if (response && otherSelect === "type") {
          fetchType();
        }
        alert(`${input} is saved to ${otherSelect}`);
      });

    clearSettings();
  };

  // console.log(type);
  // console.log(settings);
  // console.log(size);
  // console.log(color);

  return (
    <div className="container">
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
                Add Brand
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <button onClick={clearSettings}>Clear Form</button>

              <div className="">
                <div className="h6">Add option here</div>
                <input
                  type="text"
                  name="type"
                  value={otherInput}
                  onChange={(e) => {
                    setOtherInput(e.target.value);
                    setOtherSelect("");
                  }}
                />
                <select
                  name=""
                  value={otherSelect}
                  onChange={(e) => setOtherSelect(e.target.value)}
                >
                  <option value="">Select type of option</option>
                  <option value="type">Type</option>
                  <option value="color">Color</option>
                  <option value="size">Size</option>
                </select>
                <button onClick={addOtherToType}>Add</button>
              </div>
              {Object.entries(settings).map(([settingsKey, settingsValue]) => (
                <div key={settingsKey}>
                  {settingsKey === "brand" ? (
                    <>
                      <div className="">
                        <div className="h6">Add Brand here</div>
                        <input
                          type="text"
                          name={settingsKey}
                          id="brandID"
                          placeholder="Enter Brand"
                          value={settingsValue}
                          onChange={(e) => changeBrand(e)}
                        />
                        <button onClick={addType}>Add Type</button>
                      </div>
                    </>
                  ) : (
                    <>
                      {Object.entries(settingsValue).map(
                        ([typeKey, typeValue]) => (
                          <div className="" key={typeKey}>
                            {typeKey === "a_type" ? (
                              <div className="">
                                <select
                                  name={typeKey}
                                  value={typeValue}
                                  onChange={(e) => changeType(e, settingsKey, settingsValue)}
                                >
                                  <option value="">Select a type</option>
                                  {Array.isArray(type) &&
                                    type.map((item) => (
                                      <option value={item.type_id}>
                                        {item.type_name}
                                      </option>
                                    ))}
                                </select>

                                <button onClick={() => addColor(settingsKey)}>
                                  {" "}
                                  Add Color{" "}
                                </button>

                                {settingsKey !== "type" && (
                                  <button
                                    className="btn btn-transparent"
                                    onClick={() => removeType(settingsKey)}
                                  >
                                    <i class="bi bi-x"></i>
                                  </button>
                                )}
                              </div>
                            ) : (
                              <>
                                {Object.entries(typeValue).map(
                                  ([colorKey, colorValue]) => (
                                    <div key={colorKey}>
                                      {colorKey === "color" ? (
                                        <div className="">
                                          <select
                                            name={colorKey}
                                            placeholder="Enter Type"
                                            value={colorValue}
                                            onChange={(e) =>
                                              changeColor(
                                                e,
                                                settingsKey,
                                                typeKey
                                              )
                                            }
                                          >
                                            <option value="">
                                              Select a color
                                            </option>
                                            {Array.isArray(color) &&
                                              color.map((item) => (
                                                <option value={item.color_id}>
                                                  {item.color_name}
                                                </option>
                                              ))}
                                          </select>
                                          <button
                                            onClick={() =>
                                              addSize(settingsKey, typeKey)
                                            }
                                          >
                                            {" "}
                                            Add Size{" "}
                                          </button>
                                          {typeKey !== "color" && (
                                            <button
                                              className="btn btn-transparent"
                                              onClick={() =>
                                                removeColor(
                                                  settingsKey,
                                                  typeKey
                                                )
                                              }
                                            >
                                              <i class="bi bi-x"></i>
                                            </button>
                                          )}
                                        </div>
                                      ) : (
                                        <>
                                          {Object.entries(colorValue).map(
                                            ([sizeKey, sizeValue]) => (
                                              <div key={sizeKey}>
                                                <select
                                                  name={sizeKey}
                                                  placeholder="Enter Type"
                                                  value={sizeValue}
                                                  onChange={(e) =>
                                                    changeSize(
                                                      e,
                                                      settingsKey,
                                                      typeKey,
                                                      colorKey
                                                    )
                                                  }
                                                >
                                                  <option value="">
                                                    Select a size
                                                  </option>
                                                  {Array.isArray(size) &&
                                                    size.map((item) => (
                                                      <option
                                                        value={item.size_id}
                                                      >
                                                        {item.size_name}
                                                      </option>
                                                    ))}
                                                </select>

                                                {sizeKey !== "size" && (
                                                  <button
                                                    className="btn btn-transparent"
                                                    onClick={() =>
                                                      removeSize(
                                                        settingsKey,
                                                        typeKey,
                                                        colorKey,
                                                        sizeKey
                                                      )
                                                    }
                                                  >
                                                    <i class="bi bi-x"></i>
                                                  </button>
                                                )}
                                              </div>
                                            )
                                          )}
                                        </>
                                      )}
                                    </div>
                                  )
                                )}
                              </>
                            )}
                          </div>
                        )
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={() => clearSettings()}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  handleValidation();
                }}
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

export default AddBrand;
