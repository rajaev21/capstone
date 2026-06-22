import axios from "axios";
import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

const MonthlyOrders = () => {
  const [monthlyOrders, setMonthlyOrders] = useState([]);
  const [year, setYear] = useState(new Date().getFullYear());
  const [data, setData] = useState([["Month", "Quantity"]]);

  const yearsOption = () => {
    for (let i = 2020; i <= new Date().getFullYear(); i++) {
      return <option value={i}>{i}</option>;
    }
  };

  useEffect(() => {
    axios
      .get(
        `https://allsite.infy.click/backend/my-react.php?action=getMonthOrder&year=${year}`
      )
      .then((response) => {
        console.log("API response:", response.data);

        const months = [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "June",
          "July",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ];

        let newData = [["Month", "Quantity"]];

        for (let i = 1; i <= 12; i++) {
          const found =
            Array.isArray(response.data) &&
            response.data.find((item) => Number(item.month) === i);

          newData.push([months[i - 1], found ? Number(found.quantity) : 0]);
        }

        setMonthlyOrders(response.data);
        setData(newData);
      })
      .catch((error) => {
        console.error("There was an error", error);
      });
  }, [year]);

  const options = {
    title: `Monthly Orders (${year})`,
    legend: { position: "bottom" },
    curveType: "function",
  };

  return (
    <>
      <div className="form-floating mt-3">
        <select
          className="form-select"
          id="floatingSelect"
          aria-label="Floating label select example"
          value={year}
          onChange={(e) => setYear(Number(e.target.value))}
        >
          <option disabled value="">
            Select a year
          </option>
          {Array.from(
            { length: new Date().getFullYear() - 2020 + 1 },
            (_, i) => 2020 + i
          ).map((yr) => (
            <option key={yr} value={yr}>
              {yr}
            </option>
          ))}
        </select>
        <label htmlFor="floatingSelect">Select year here</label>
      </div>

      <Chart
        chartType="LineChart"
        data={data}
        options={options}
        height={"15em"}
        width={"100%"}
      />
    </>
  );
};

export default MonthlyOrders;
