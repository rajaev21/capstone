import { useState } from "react";
import { Chart } from "react-google-charts";

const Stocks = ({ inventory, color }) => {
  const [selected, setSelected] = useState("");
  const brands = inventory.filter(
    (item, index, self) =>
      index === self.findIndex((x) => x.brand === item.brand)
  );
  const selectedBrands = inventory.filter((item) => (selected === item.brand))
  const addColor = selected.map(item => {
    return(
        [...item,]
    )
  })
  console.log("color",color);
  console.log("selected", selectedBrands);

  const options = {
    stacked: true,
    chart: {
      title: "Stocks",
      subtitle: "Quantity of each types and colors",
    },
    bars: "vertical",

    bar: { groupWidth: "75%" },
  };
  const data = [
    [
      "Type",
      "White",
      { role: "style" },
      "Black",
      { role: "style" },
      "Blue",
      { role: "style" },
      "Green",
      { role: "style" },
    ],
    ["Shirt", 12, 8, 5, 3],
    ["PoloShirt", 7, 10, 4, 6],
  ];
  return (
    <div className="">
      <div class="form-floating">
        <select
          class="form-select"
          id="floatingSelectGrid"
          onChange={(e) => setSelected(e.target.value)}
        >
          <option selected>Select Brand</option>
          {brands.map((item) => (
            <option value={item.brand}>{item.brand}</option>
          ))}
        </select>
        <label for="floatingSelectGrid">Select Brands</label>
      </div>
      <Chart
        chartType="BarChart"
        options={options}
        data={data}
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default Stocks;
