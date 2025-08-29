import { useEffect, useState } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { Chart } from "react-google-charts";

const Stocks = ({ inventory, color }) => {
  const [selected, setSelected] = useState(inventory[0].brand);
  const dataHeader = [["Type"]];

  const brandChoices = inventory.filter(
    (item, index, self) =>
      index === self.findIndex((x) => x.brand === item.brand)
  );
  const selectedBrands = inventory.filter(
    (item) => item.brand === selected.brand
  );
  const typeChoices = selectedBrands.filter(
    (item, index, self) => index === self.findIndex((x) => x.type === item.type)
  );
  const selectedTypes = inventory.filter((item) => item.type === selected.type);

  const types = inventory.filter(
    (item, index, self) =>
      index === self.findIndex((x) => x.type === selected.type)
  );

  selected &&
    selectedBrands.forEach(() => {
      dataHeader[0].push("Quantity", { role: "style" }, { role: "annotation" });
    }, [selected]);

  types.forEach((type) => {
    const row = [type.type];
    selectedBrands.forEach((item) => {
      if (item.type === type.type) {
        row.push(item.qty, item.hex, item.color);
      } else {
        row.push(null, null, null);
      }
    });
    dataHeader.push(row);
  });

  const options = {
    bar: { groupWidth: "80%" },
    annotations: {
      textStyle: {
        fontSize: 14,
        bold: true,
      },
    },
    bars: "horizontal",
    legend: { position: "none" },
  };

  console.log(selected);
  console.log("selectedBrands", selectedBrands);
  console.log("typeChoices", typeChoices);
  console.log("selectedTypes", selectedTypes);

  return (
    <section>
      <h2>Brands</h2>
      <ul className="nav nav-tabs mb-3">
        {brandChoices.map((item) => (
          <li className="nav-item">
            <a
              href="#"
              className="text-capitalize nav-link fs-4"
              data-bs-toggle="tab"
              onClick={() => {
                setSelected({ brand: item.brand, type: item.type });
              }}
            >
              {item.brand}
            </a>
          </li>
        ))}
      </ul>
      <div class="form-floating">
        <select
          class="form-select"
          id="floatingSelectGrid"
          onChange={(e) =>
            setSelected((prev) => ({ ...prev, type: e.target.value }))
          }
        >
          {typeChoices.map((item, index) => (
            <option value={item.type}>{item.type}</option>
          ))}
        </select>
        <label for="floatingSelectGrid">Select shirt type</label>
      </div>
      <div className="row">
        <div className="col">
          <Chart
            chartType="BarChart"
            options={options}
            data={dataHeader}
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </section>
  );
};

export default Stocks;
