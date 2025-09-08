import axios from "axios";
import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

const TopItemSales = () => {
  const [data, setData] = useState([["Item", "Quantity"]]);

  const options = {
    title: "Top Item Sales",
    subtitle: "Best-selling items and their quantities",

    legend: { position: "none" },
  };

  useEffect(() => {
    axios
      .get("http://localhost/capstone/submit.php?action=topSales")
      .then((response) => {
        console.log("Top sales API:", response.data);

        const newData = [["Item", "Quantity"]];
        response.data.forEach((item) => {
          newData.push([item.inventory_name, Number(item.quantity)]);
        });

        setData(newData);
      })
      .catch((error) => {
        console.error("Error fetching top sales:", error);
      });
  }, []);

  return (
    <section>
      <Chart
        chartType="BarChart"
        options={options}
        data={data}
        width={"100%"}
        height={"300px"}
      />
    </section>
  );
};

export default TopItemSales;
