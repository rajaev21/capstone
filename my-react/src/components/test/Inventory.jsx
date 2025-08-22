import { useState } from "react";
import { Collapse } from "bootstrap";

const Test = ({ inventory, color }) => {
  const [selected, setSelected] = useState({ brand: "", type: "", color: "" });
  const brands = inventory.filter(
    (brand, brandIndex, self) =>
      brandIndex === self.findIndex((item) => item.brand === brand.brand)
  );

  const filteredBrands = inventory.filter((x) => x.brand === selected.brand);
  const types = filteredBrands.filter(
    (type, typeIndex, self) =>
      typeIndex === self.findIndex((item) => item.type === type.type)
  );

  const filteredTypes = filteredBrands.filter((x) => x.type === selected.type);
  const colors = filteredTypes.filter(
    (color, colorIndex, self) =>
      colorIndex === self.findIndex((item) => item.color === color.color)
  );

  const filteredColors = filteredTypes.filter(
    (x) => x.color === selected.color
  );
  const sizes = filteredColors.filter(
    (color, colorIndex, self) =>
      colorIndex === self.findIndex((item) => item.size === color.size)
  );

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
      const bsCollapse = Collapse.getInstance(acc) || new Collapse(acc);
      bsCollapse.hide();
    });
  }
  console.log("sizes", colors)
  return (
    <section>
      <h2>Brands</h2>
      <ul className="nav nav-tabs mb-3">
        {brands.map((item) => (
          <li className="nav-item">
            <a
              href="#"
              className="text-capitalize nav-link fs-4"
              data-bs-toggle="tab"
              onClick={() => {
                setSelected({ brand: item.brand, type: "" });
                closeCollapse();
              }}
            >
              {item.brand}
            </a>
          </li>
        ))}
      </ul>

      <h2>Types</h2>
      <div class="accordion" id="accordionExample">
        {types.map((item) => (
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#${item.type}`}
                onClick={() => {
                  setSelected((prev) => ({ ...prev, type: item.type }));
                }}
              >
                <div className="text-capitalize fw-bold">{item.type}</div>
              </button>
            </h2>
            <div
              id={item.type}
              class="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                {/* Body here */}
                <div className="row">
                  <div className="col-4">
                    <div className="list-group list-group-horizontal row row-cols-4">
                      {colors.map((item) => (
                        <button
                          className="list-group-item flex-fill border border-3"
                          style={{ backgroundColor: getHex(item.color) }}
                          onClick={() => {
                            setSelected((prev) => ({
                              ...prev,
                              color: item.color,
                            }));
                          }}
                        >
                          <span
                            className="fw-bold text-capitalize"
                            style={{ color: getContrastColor(item.color) }}
                          >
                            {item.color}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="col">
                    <div className="fs-3 fw-bold text-center text-uppercase">{selected.color ? selected.color : "select a color to see available stocks"}</div>
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th>Size</th>
                          <th>Quantity</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {sizes.map((item) => (
                          <tr>
                            <td>{item.size}</td>
                            <td>{item.qty}</td>
                            <td>
                              <button className="btn btn-primary">test</button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Test;
