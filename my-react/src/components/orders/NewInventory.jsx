import { useState } from "react";
import { Collapse } from "bootstrap";
import { useLocation } from "react-router-dom";
import DirectBuy from "./DirectBuy";
import AddPrice from "./AddPrice";

const NewInventory = ({ inventory, color, setOrder, order }) => {
  const paramID = new URLSearchParams(useLocation().search);
  const location = useLocation();
  const [selected, setSelected] = useState({});
  const colorOrder = color.map((item) => item.color_name);
  const sizeOrder = ["xs", "s", "m", "l", "xl", "2xl", "3xl", "4xl", "5xl"];
  const [item, setItem] = useState({});

  const brands = inventory
    ? inventory.filter(
        (t, index, self) =>
          index === self.findIndex((item) => item.brand === t.brand)
      )
    : [];

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
    ? filteredTypes
        .filter(
          (c, index, self) =>
            index === self.findIndex((item) => item.color === c.color)
        )
        .sort(
          (a, b) => colorOrder.indexOf(a.color) - colorOrder.indexOf(b.color)
        )
    : [];

  const filteredColors = Array.isArray(filteredTypes)
    ? filteredTypes.filter((x) => x.color === selected.color)
    : [];

  const sizes = Array.isArray(filteredColors)
    ? filteredColors
        .filter(
          (s, index, self) =>
            index === self.findIndex((item) => item.size === s.size)
        )
        .sort((a, b) => sizeOrder.indexOf(a.size) - sizeOrder.indexOf(b.size))
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

  function inOrder(id) {
    return order.some((item) => item.id === id);
  }

  return (
    <section>
      <div className="fs-3 fw-bold">Brands</div>
      <ul className="nav nav-tabs mb-3">
        {brands.map((brand, index) => (
          <li key={index} className="nav-item">
            <a
              href="#"
              className="text-capitalize nav-link fs-4"
              data-bs-toggle="tab"
              onClick={() => {
                setSelected({ brand: brand.brand, type: "" });
                closeCollapse();
              }}
            >
              {brand.brand}
            </a>
          </li>
        ))}
      </ul>
      {selected.brand ? (
        <>
          <div className="fs-3 fw-bold pb-3 ">Types</div>
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
                      <div className="text-capitalize fw-bold">{item.type}</div>
                    </button>
                  </h2>
                  <div
                    id={name}
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      {/* Body here */}
                      <div className="row">
                        <div className="col-6">
                          <div className="fs-3 fw-bold pb-3">Colors</div>
                          <div className="list-group list-group-horizontal row row-cols-4">
                            {colors.map((color) => (
                              <button
                                className="list-group-item flex-fill border border-3"
                                style={{
                                  backgroundColor: getHex(color.color),
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
                                    color: getContrastColor(color.color),
                                  }}
                                >
                                  {color.color}
                                </span>
                              </button>
                            ))}
                          </div>
                        </div>
                        <div className="col">
                          {selected.color ? (
                            <>
                              <div className="row">
                                <div className="col">
                                  <div className="fs-3 fw-bold pb-3">Sizes</div>
                                </div>

                                <div className="col">
                                  <div className="text-end fs-3">
                                    <div
                                      className="badge"
                                      style={{
                                        backgroundColor: getHex(selected.color),
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
                                </div>
                              </div>
                              <table className="table table-bordered">
                                <thead>
                                  <tr>
                                    <th>Size</th>
                                    <th>Quantity</th>
                                    <th>Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {sizes.map((item) => {
                                    return (
                                      <tr>
                                        <td>{item.size}</td>
                                        <td>{item.qty}</td>
                                        <td>
                                          <div className="d-flex gap-2 justify-content-center">
                                            <button
                                              className="btn btn-primary"
                                              data-bs-toggle="modal"
                                              data-bs-target="#setPrice"
                                              onClick={() => setItem(item)}
                                              disabled={inOrder(item.id)}
                                            >
                                              <i className="bi bi-cart"></i>
                                            </button>
                                            <>
                                              <button
                                                type="button"
                                                class="btn btn-secondary"
                                                data-bs-toggle="modal"
                                                data-bs-target="#directBuy"
                                                onClick={() => setItem(item)}
                                              >
                                                <i className="bi bi-cash"></i>
                                              </button>
                                            </>
                                          </div>
                                        </td>
                                      </tr>
                                    );
                                  })}
                                </tbody>
                              </table>
                            </>
                          ) : (
                            <div className="fs-5 fw-bold text-center text-uppercase">
                              select a color to see available stocks
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <div className="fs-3 fw-bold">Please select a brand</div>
      )}
      <AddPrice item={item} setOrder={setOrder} />
      <DirectBuy item={item} />
    </section>
  );
};

export default NewInventory;
