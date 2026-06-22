import axios from "axios";
import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

const WeeklyOrders = () => {
  const [weeklyOrders, setWeeklyOrders] = useState([]);
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [data, setData] = useState([["Date", "Quantity"]]);

  useEffect(() => {
    axios
      .get(
        `https://allsite.infy.click/backend/my-react.php?action=getWeeklyOrders&day=${selectedDate}`
      )
      .then((response) => {
        console.log(response.data);
        setWeeklyOrders(response.data);
      })
      .catch((error) => {
        console.error("There was an error", error);
      });
  }, [selectedDate]);

  useEffect(() => {
    const baseDate = new Date(selectedDate);
    const weekDay = baseDate.getDay();
    const startOfWeek = new Date(baseDate);
    startOfWeek.setDate(baseDate.getDate() - weekDay);

    let newData = [["Date", "Quantity"]];

    for (let i = 0; i <= 6; i++) {
      const newDate = new Date(startOfWeek);
      newDate.setDate(startOfWeek.getDate() + i);

      const formattedDate = newDate.toISOString().split("T")[0];
      const found = weeklyOrders.find(
        (item) => item.order_date === formattedDate
      );

      newData.push([
        newDate.toLocaleDateString("en-CA"),
        found ? Number(found.quantity) : 0,
      ]);
    }

    setData(newData);
  }, [weeklyOrders, selectedDate]);

  const options = {
    title: "Weekly Orders",
    legend: { position: "bottom" },
    curveType: "function",
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="input-group input-group-sm mb-3">
          <span className="input-group-text">
            <i className="bi bi-calendar-check"></i>
          </span>
          <div className="form-floating">
            <input
              className="form-control form-control-sm"
              id="deadline"
              type="date"
              placeholder="deadline"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            />
            <label htmlFor="deadline">Select date here</label>
          </div>
        </div>
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

export default WeeklyOrders;
