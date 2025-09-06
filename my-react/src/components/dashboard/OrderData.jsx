import { useState } from "react";
import LineChart from "./charts/LineChart";
const OrderData = ({ data, setData }) => {

    const [date, setDate] = useState(new Date().toISOString().split("T")[0])
    console.log(date)
  return (
    <div className="container mt-3">
      <div className="d-flex justify-content-center">
        <div
          className="input-group input-group-sm mb-3"
          style={{ width: "15em" }}
        >
          <span className="input-group-text">
            <i className="bi bi-calendar-check"></i>
          </span>
          <div className="form-floating flex-grow-1">
            <input
              className="form-control form-control-sm"
              id="deadline"
              type="date"
              placeholder="deadline"
              value={data.selectedDate}
              onChange={(e) => {
                setData((prev) => ({
                  ...prev,
                  selectedDate: e.target.value,
                }));
              }}
            />
            <label htmlFor="deadline">Select date here</label>
          </div>
        </div>
      </div>

      <LineChart
        weeklyOrders={data.weeklyOrders}
        selectedDate={data.selectedDate}
      />
      <LineChart
        weeklyOrders={data.weeklyOrders}
        selectedDate={data.selectedDate}
      />
    </div>
  );
};

export default OrderData;
