import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

const LineChart = ({ weeklyOrders, selectedDate }) => {
  const [data, setData] = useState([["Date", "Quantity"]]);

  function getStartOfTheWeek(date = new Date()) {
    const d = new Date(date);
    const day = d.getDay();
    const diff = d.getDate() - day + (day === 0 ? -6 : 1);
    return new Date(d.setDate(diff));
  }

  useEffect(() => {
    const start = getStartOfTheWeek();
    const newData = [["Date", "Quantity"]];

    for (let i = 0; i < 7; i++) {
      const current = new Date(start);
      current.setDate(start.getDate() + i);

      const yyyy = current.getFullYear();
      const mm = String(current.getMonth() + 1).padStart(2, "0");
      const dd = String(current.getDate()).padStart(2, "0");
      const formatted = `${yyyy}-${mm}-${dd}`;

      const match =
        Array.isArray(weeklyOrders) &&
        weeklyOrders.find((item) => item.order_date === formatted);

      newData.push([formatted, match ? match.quantity : 0]);
    }

    setData(newData);
  }, [weeklyOrders]);

  console.log(data)
  const options = {
    title: "Weekly orders",
    legend: { position: "bottom" },
  };

  return (
    <Chart
      chartType="LineChart"
      data={data}
      options={options}
      height={"15em"}
      width={"100%"}
    />
  );
};

export default LineChart;
