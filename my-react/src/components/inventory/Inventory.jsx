import { useEffect, useState } from "react";
import { Collapse } from "bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import AddType from "./inventoryComponents/AddType";
import AddBrand from "./inventoryComponents/AddBrand";
import DeleteBrand from "./inventoryComponents/DeleteBrand";
import DeleteType from "./inventoryComponents/DeleteType";
import AddQuantity from "./inventoryComponents/AddQuantity";
import Return from "./inventoryComponents/Return";
import AddNewStocks from "./inventoryComponents/AddNewStocks";

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
  const role = localStorage.getItem("role");
  const [selected, setSelected] = useState({});
  const [itemReturn, setItemReturn] = useState(false);
  const navigate = useNavigate();
  const paramID = new URLSearchParams(useLocation().search);
  const sizeOrder = ["xs", "s", "m", "l", "xl", "2xl", "3xl", "4xl", "5xl"];
  const colorOrder = color.map((item) => item.color_name);

  const filteredBrands = inventory
    ? inventory.filter((x) => x.brand === selected.brand)
    : [];

  const filteredTypes = filteredBrands
    ? filteredBrands.filter((x) => x.type === selected.type)
    : [];

  const types = filteredBrands
    ? filteredBrands.filter(
        (t, index, self) =>
          index === self.findIndex((item) => item.type === t.type)
      )
    : [];

  const sizes = filteredTypes
    ? filteredTypes
        .filter(
          (c, index, self) =>
            index === self.findIndex((item) => item.size === c.size)
        )
        .sort((a, b) => sizeOrder.indexOf(a.size) - sizeOrder.indexOf(b.size))
    : [];
  const colors = filteredTypes
    ? filteredTypes
        .filter(
          (c, index, self) =>
            index === self.findIndex((item) => item.color === c.color)
        )
        .sort(
          (a, b) => colorOrder.indexOf(a.color) - colorOrder.indexOf(b.color)
        )
    : [];

  const filteredInventory = Array.isArray(inventory)
    ? inventory.filter(
        (x) => x.brand === selected.brand && x.type === selected.type
      )
    : [];

  function getHex(colorName) {
    const found =
      Array.isArray(color) &&
      color.find((item) => item.color_name === colorName);
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

  var lowStocks;
  const id = paramID.get("id");
  if (id && Object.keys(selected).length === 0) {
    lowStocks = inventory.find((item) => item.id == id);
    setSelected({
      brand: lowStocks.brand,
      type: lowStocks.type,
      color: lowStocks.color,
      size: lowStocks.size,
    });
  }

  // console.log(filteredInventory);

  return (
    <section onClick={() => navigate(useLocation.pathname)}>
      {role === "1" && (
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
      )}
      <AddBrand
        title={"brand"}
        option={brand}
        fetchInventory={fetchInventory}
        fetchBrand={fetchBrand}
      />
      <ul className="nav nav-tabs mb-3">
        {brand.map((brand, index) => (
          <li key={index} className="nav-item">
            <a
              href="#"
              className={`text-capitalize nav-link fs-4 ${
                brand.brand_name === selected.brand && " active "
              } `}
              data-bs-toggle="tab"
              onClick={() => {
                setSelected({ brand: brand.brand_name });
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
            {role === "1" && (
              <button
                type="button"
                className="btn btn-transparent"
                data-bs-toggle="modal"
                data-bs-target="#type"
              >
                <i className="bi bi-plus-circle"></i>
              </button>
            )}
          </div>
          {types.length < 1 && role === "1" ? (
            <>
              <div className="fs-6">
                No types found. Click the{" "}
                <span className="fw-bold text-capitalize">"+"</span> icon to add
                types or click{" "}
                <button
                  type="button"
                  className="btn btn-outline-danger btn-sm"
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
                  <div key={index} className="accordion-item">
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
                      className={`accordion-collapse collapse ${
                        item.type === selected.type && "show"
                      }`}
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        {/* Body here */}
                        <div className="fs-6 mb-2">
                          <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#addStoks"
                          >
                            Add new stocks
                          </button>
                          {role === "1" && (
                            <>
                              <button
                                type="button"
                                className="btn btn-warning ms-2"
                                onClick={() => setItemReturn((prev) => !prev)}
                              >
                                Return Item
                              </button>
                              <button
                                type="button"
                                className="btn btn-danger ms-2"
                                data-bs-toggle="modal"
                                data-bs-target="#deleteType"
                              >
                                Delete Table
                              </button>
                            </>
                          )}
                          <DeleteType selected={selected} />
                        </div>
                        <table className="table table-sm table-hover">
                          <thead>
                            <tr>
                              <th></th>
                              {sizes.map((size) => {
                                return (
                                  <th className="text-uppercase text-center">
                                    {size.size}
                                  </th>
                                );
                              })}
                            </tr>
                          </thead>
                          <tbody>
                            {colors.map((color) => (
                              <tr
                                key={color.color}
                                className="text-center text-capitalize"
                              >
                                <td
                                  className="col-2"
                                  style={{
                                    color: getContrastColor(color.color),
                                    backgroundColor: getHex(color.color),
                                  }}
                                >
                                  {color.color}
                                </td>

                                {sizes.map((s, i) => {
                                  const match = filteredBrands.find(
                                    (item) =>
                                      item.color === color.color &&
                                      item.size === s.size &&
                                      item.type === selected.type &&
                                      item.brand === selected.brand
                                  );
                                  const qty = match ? match.qty : 0;

                                  return (
                                    <td
                                      key={i}
                                      style={
                                        qty < 30 && qty !== 0
                                          ? { backgroundColor: "#f00d0d1f" }
                                          : {}
                                      }
                                    >
                                      <span>{qty}</span>
                                      {itemReturn && qty > 0 && (
                                        <button
                                          type="button"
                                          className="btn btn-danger btn-sm mx-2"
                                          onClick={() => setSelected(match)}
                                          data-bs-toggle="modal"
                                          data-bs-target="#return"
                                        >
                                          <i className="bi bi-arrow-left"></i>
                                        </button>
                                      )}
                                    </td>
                                  );
                                })}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                        {/* end body */}
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

      <Return
        title={"return"}
        inventory={inventory}
        selected={selected}
        brands={brand}
        types={type}
        colors={color}
        sizes={size}
        fetchInventory={fetchInventory}
        setItemReturn={setItemReturn}
      />
      <AddNewStocks
        selected={selected}
        size={size}
        colors={colors}
        filteredInventory={filteredInventory}
        getContrastColor={getContrastColor}
        getHex={getHex}
        fetchInventory={fetchInventory}
      />
      <AddType
        option={type}
        selected={selected}
        exsistingType={types}
        fetchInventory={fetchInventory}
        fetchType={fetchType}
        closeCollapse={closeCollapse}
        color={color}
        getHex={getHex}
        setSelected={setSelected}
        getContrastColor={getContrastColor}
        size={size}
        brand={brand}
        type={type}
        fetchColor={fetchColor}
        fetchSize={fetchSize}
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
        inventory={inventory}
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
      <DeleteType
        selected={selected}
        brands={brand}
        types={type}
        fetchInventory={fetchInventory}
        fetchType={fetchType}
        closeCollapse={closeCollapse}
      />
    </section>
  );
};

export default Inventory;
