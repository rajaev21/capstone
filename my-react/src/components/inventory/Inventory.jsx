import { useState } from "react";
import { Collapse } from "bootstrap";
import AddType from "./inventoryComponents/AddType";
import AddBrand from "./inventoryComponents/AddBrand";
import DeleteBrand from "./inventoryComponents/DeleteBrand";
import DeleteType from "./inventoryComponents/DeleteType";
import AddColor from "./inventoryComponents/AddColor";
import DeleteColor from "./inventoryComponents/DeleteColor";
import AddSize from "./inventoryComponents/AddSize";
import AddQuantity from "./inventoryComponents/AddQuantity";
import DeleteSize from "./inventoryComponents/DeleteSize";
import AddPrice from "./inventoryComponents/AddPrice";
import Return from "./inventoryComponents/Return";

const Inventory = ({
  inventory,
  brand,
  type,
  color,
  size,
  fetchInventory,
  fetchBrand,
  fetchType,
  fetchColor,
  fetchSize,
}) => {
  const [selected, setSelected] = useState({});

  const selected_brand = Array.isArray(brand)
    ? brand.find((item) => item.brand_name === selected.brand)
    : null;

  const filteredBrands = Array.isArray(inventory)
    ? inventory.filter((x) => x.brand === selected.brand)
    : [];

  const types = Array.isArray(filteredBrands)
    ? filteredBrands.filter(
        (t, index, self) =>
          index === self.findIndex((item) => item.type === t.type)
      )
    : [];

  const filteredTypes = Array.isArray(filteredBrands)
    ? filteredBrands.filter((x) => x.type === selected.type)
    : [];

  const colors = Array.isArray(filteredTypes)
    ? filteredTypes.filter(
        (c, index, self) =>
          index === self.findIndex((item) => item.color === c.color)
      )
    : [];

  const filteredColors = Array.isArray(filteredTypes)
    ? filteredTypes.filter((x) => x.color === selected.color)
    : [];

  const sizes = Array.isArray(filteredColors)
    ? filteredColors.filter(
        (s, index, self) =>
          index === self.findIndex((item) => item.size === s.size)
      )
    : [];

  function getHex(colorName) {
    const found = color.find((item) => item.color_name === colorName);
    return found ? found.hex : "#000000";
  }
  function getContrastColor(colorName) {
    const h = getHex(colorName);
    const hex = h.replace("#", "");
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);

    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

    return luminance > 0.5 ? "#000000" : "#FFFFFF";
  }

  function closeCollapse() {
    const openAccordions = document.querySelectorAll(
      ".accordion-collapse.show"
    );
    openAccordions.forEach((acc) => {
      let bsCollapse = Collapse.getInstance(acc);
      if (!bsCollapse) {
        bsCollapse = new Collapse(acc, { toggle: false });
      }
      if (bsCollapse) {
        bsCollapse.hide();
      }
    });
  }

  return (
    <section>
      <div className="fs-3 fw-bold">
        Brands
        <button
          type="button"
          className="btn btn-transparent"
          data-bs-toggle="modal"
          data-bs-target="#brand"
        >
          <i className="bi bi-plus-circle"></i>
        </button>
      </div>
      <AddBrand
        title={"brand"}
        option={brand}
        fetchInventory={fetchInventory}
        fetchBrand={fetchBrand}
      />
      <ul className="nav nav-tabs mb-3">
        {Array.isArray(brand) &&
          brand.map((brand, index) => (
            <li key={index} className="nav-item">
              <a
                href="#"
                className="text-capitalize nav-link fs-4"
                data-bs-toggle="tab"
                onClick={() => {
                  setSelected({ brand: brand.brand_name, type: "" });
                  closeCollapse();
                }}
              >
                {brand.brand_name}
              </a>
            </li>
          ))}
      </ul>

      {selected.brand ? (
        <>
          <div className="fs-3 fw-bold pb-3 ">
            Types
            <button
              type="button"
              className="btn btn-transparent"
              data-bs-toggle="modal"
              data-bs-target="#type"
            >
              <i className="bi bi-plus-circle"></i>
            </button>
          </div>
          <AddType
            title={"type"}
            option={type}
            selected_brand={selected_brand}
            exsistingType={types}
            fetchInventory={fetchInventory}
            fetchType={fetchType}
            closeCollapse={closeCollapse}
          />
          {types.length < 1 ? (
            <>
              <div className="fs-6">
                No types found. Click the{" "}
                <span className="fw-bold text-capitalize">"+"</span> icon to add
                types or click{" "}
                <button
                  type="button"
                  class="btn btn-outline-danger btn-sm"
                  data-bs-toggle="modal"
                  data-bs-target="#deleteBrand"
                >
                  Here
                </button>{" "}
                to delete brand{" "}
                <span className="fw-bold text-capitalize">
                  "{selected.brand}"
                </span>
              </div>
            </>
          ) : (
            <div className="accordion" id="accordionExample">
              {types.map((item, index) => {
                let typename = item.type.replace(/\s+/g, "-");
                let name = `${typename}${index}`;
                return (
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#${name}`}
                        onClick={() => {
                          setSelected((prev) => ({
                            ...prev,
                            type: item.type,
                            color: "",
                          }));
                        }}
                      >
                        <div className="text-capitalize fw-bold">
                          {item.type}
                        </div>
                      </button>
                    </h2>
                    <div
                      id={name}
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        {/* Body here */}
                        {colors.length == 1 && (
                          <div className="fs-3 fw-bold pb-3">
                            Colors
                            <button
                              type="button"
                              className="btn btn-transparent"
                              data-bs-toggle="modal"
                              data-bs-target="#addColor"
                            >
                              <i className="bi bi-plus-circle"></i>
                            </button>
                          </div>
                        )}
                        {colors.length > 1 ? (
                          <div className="row">
                            <div className="col-4">
                              <div className="fs-3 fw-bold pb-3">
                                Colors
                                <button
                                  type="button"
                                  className="btn btn-transparent"
                                  data-bs-toggle="modal"
                                  data-bs-target="#addColor"
                                >
                                  <i className="bi bi-plus-circle"></i>
                                </button>
                              </div>
                              <div className="list-group list-group-horizontal row row-cols-4">
                                {selected.type
                                  ? colors
                                      .filter((item) => item.color != null)
                                      .map((color) => (
                                        <button
                                          className="list-group-item flex-fill border border-3"
                                          style={{
                                            backgroundColor: getHex(
                                              color.color
                                            ),
                                          }}
                                          onClick={() => {
                                            setSelected((prev) => ({
                                              ...prev,
                                              color: color.color,
                                              size: "",
                                            }));
                                          }}
                                        >
                                          <span
                                            className="fw-bold text-capitalize"
                                            style={{
                                              color: getContrastColor(
                                                color.color
                                              ),
                                            }}
                                          >
                                            {color.color}
                                          </span>
                                        </button>
                                      ))
                                  : " "}
                              </div>
                            </div>
                            <div className="col">
                              {selected.color && (
                                <div className="fs-3 fw-bold pb-3">
                                  Sizes
                                  <button
                                    type="button"
                                    className="btn btn-transparent"
                                    data-bs-toggle="modal"
                                    data-bs-target="#size"
                                  >
                                    <i className="bi bi-plus-circle"></i>
                                  </button>
                                </div>
                              )}
                              {sizes.length > 1 ? (
                                <div>
                                  <div className="fs-5 fw-bold text-center text-uppercase">
                                    {selected.color ? (
                                      <div className="text-end">
                                        <div
                                          className="badge"
                                          style={{
                                            backgroundColor: getHex(
                                              selected.color
                                            ),
                                          }}
                                        >
                                          <span
                                            style={{
                                              color: getContrastColor(
                                                selected.color
                                              ),
                                            }}
                                          >
                                            {selected.color}
                                          </span>
                                        </div>
                                      </div>
                                    ) : (
                                      "select a color to see available stocks"
                                    )}
                                  </div>
                                  <table className="table table-bordered">
                                    <thead>
                                      <tr>
                                        <th>Size</th>
                                        <th>Quantity</th>
                                        <th>Price ( ₱ )</th>
                                        <th>Action</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {sizes
                                        .filter((item) => item.size !== null)
                                        .map((item) => {
                                          return (
                                            <tr>
                                              <td>{item.size}</td>
                                              <td>
                                                {item.qty ? (
                                                  item.qty
                                                ) : (
                                                  <>
                                                    <div className="fs-6">
                                                      No stocks. Click the{" "}
                                                      <span className="fw-bold text-capitalize">
                                                        "+"
                                                      </span>{" "}
                                                      icon to add quantity or
                                                      click{" "}
                                                      <button
                                                        type="button"
                                                        class="btn btn-outline-danger btn-sm"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#deleteSize"
                                                        onClick={() =>
                                                          setSelected(
                                                            (prev) => ({
                                                              ...prev,
                                                              size: item.size,
                                                            })
                                                          )
                                                        }
                                                      >
                                                        Here
                                                      </button>{" "}
                                                      to delete stocks{" "}
                                                      <span className="fw-bold text-capitalize">
                                                        "{item.size}"
                                                      </span>
                                                    </div>
                                                  </>
                                                )}
                                              </td>
                                              <td>
                                                {item.price ? (
                                                  item.price
                                                ) : (
                                                  <div className="fs-6">
                                                    Click the "₱" button to set
                                                    price
                                                  </div>
                                                )}
                                              </td>
                                              <td>
                                                <div className="d-flex gap-2">
                                                  <button
                                                    type="button"
                                                    className="btn btn-primary"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#quantity"
                                                    onClick={() =>
                                                      setSelected((prev) => ({
                                                        ...prev,
                                                        size: item.size,
                                                      }))
                                                    }
                                                  >
                                                    <i className="bi bi-plus-circle"></i>
                                                  </button>
                                                  <button
                                                    type="button"
                                                    className="btn btn-info"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#price"
                                                    onClick={() =>
                                                      setSelected((prev) => ({
                                                        ...prev,
                                                        size: item.size,
                                                      }))
                                                    }
                                                    style={{
                                                      width: "40px",
                                                      height: "40px",
                                                    }}
                                                  >
                                                    <span className="fs-6" style={{ color: "#f1f9faff" }}>
                                                      ₱
                                                    </span>
                                                  </button>
                                                  <button
                                                    type="button"
                                                    className="btn btn-danger"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#return"
                                                    onClick={() =>
                                                      setSelected((prev) => ({
                                                        ...prev,
                                                        size: item.size,
                                                      }))
                                                    }
                                                  >
                                                    <i className="bi bi-arrow-left"></i>
                                                  </button>
                                                </div>
                                              </td>
                                            </tr>
                                          );
                                        })}
                                    </tbody>
                                  </table>
                                </div>
                              ) : (
                                <>
                                  {selected.color ? (
                                    <div className="fs-6">
                                      No size found. Click the{" "}
                                      <span className="fw-bold text-capitalize">
                                        "+"
                                      </span>{" "}
                                      icon to add size or click{" "}
                                      <button
                                        type="button"
                                        class="btn btn-outline-danger btn-sm"
                                        data-bs-toggle="modal"
                                        data-bs-target="#deleteColor"
                                      >
                                        Here
                                      </button>{" "}
                                      to delete color{" "}
                                      <span className="fw-bold text-capitalize">
                                        "{selected.color}"
                                      </span>
                                    </div>
                                  ) : (
                                    <div className="fs-5 fw-bold">
                                      Please select a color
                                    </div>
                                  )}
                                </>
                              )}
                            </div>
                          </div>
                        ) : (
                          <div className="fs-6">
                            No color found. Click the{" "}
                            <span className="fw-bold text-capitalize">"+"</span>{" "}
                            icon to add color or click{" "}
                            <button
                              type="button"
                              class="btn btn-outline-danger btn-sm"
                              data-bs-toggle="modal"
                              data-bs-target="#deleteType"
                            >
                              Here
                            </button>{" "}
                            to delete type{" "}
                            <span className="fw-bold text-capitalize">
                              "{selected.type}"
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </>
      ) : (
        <div className="fs-3 fw-bold">Please select a brand</div>
      )}
      <AddColor
        title={"color"}
        selected={selected}
        brands={brand}
        types={type}
        colors={color}
        exsistingType={colors}
        fetchInventory={fetchInventory}
        fetchColor={fetchColor}
      />
      <AddSize
        title={"size"}
        selected={selected}
        brands={brand}
        types={type}
        colors={color}
        sizes={size}
        exsistingSize={sizes}
        fetchInventory={fetchInventory}
        fetchSize={fetchSize}
      />
      <AddPrice
        title={"price"}
        selected={selected}
        brands={brand}
        types={type}
        colors={color}
        sizes={size}
        fetchInventory={fetchInventory}
      />
      <AddQuantity
        title={"quantity"}
        selected={selected}
        brands={brand}
        types={type}
        colors={color}
        sizes={size}
        fetchInventory={fetchInventory}
      />
      <Return
        title={"return"}
        selected={selected}
        brands={brand}
        types={type}
        colors={color}
        sizes={size}
        fetchInventory={fetchInventory}
      />
      <DeleteBrand
        selected={selected.brand}
        brands={brand}
        fetchInventory={fetchInventory}
        fetchBrand={fetchBrand}
        setSelected={setSelected}
      />
      <DeleteSize
        title={"size"}
        selected={selected}
        brands={brand}
        types={type}
        colors={color}
        sizes={size}
        fetchInventory={fetchInventory}
        fetchSize={fetchSize}
      />
      <DeleteType
        selected={selected}
        brands={brand}
        types={type}
        fetchInventory={fetchInventory}
        fetchType={fetchType}
        closeCollapse={closeCollapse}
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
      />
    </section>
  );
};

export default Inventory;
