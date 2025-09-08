import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import OrderData from "./OrderData";
const Dashboard = ({}) => {
  const [data, setData] = useState({});
  useEffect(() => {
    getOrdersToday();
    getTasksToday();
    getOrdersFinishedToday();
    getDeadlineToday();
  }, []);
  function getOrdersFinishedToday() {
    axios
      .get("http://localhost/capstone/submit.php?action=getOrdersFinishedToday")
      .then((response) => {
        setData((prev) => ({
          ...prev,
          ordersFinished: response.data.quantity,
        }));
      })
      .catch((error) => {
        console.error("There was na error", error);
      });
  }

  function getOrdersToday() {
    axios
      .get("http://localhost/capstone/submit.php?action=getOrdersToday")
      .then((response) => {
        setData((prev) => ({
          ...prev,
          ordersToday: response.data.quantity,
        }));
      })
      .catch((error) => {
        console.error("There was na error", error);
      });
  }
  function getTasksToday() {
    axios
      .get("http://localhost/capstone/submit.php?action=getTasksToday")
      .then((response) => {
        setData((prev) => ({
          ...prev,
          tasksToday: response.data.transactions,
        }));
      })
      .catch((error) => {
        console.error("There was na error", error);
      });
  }
  function getDeadlineToday() {
    axios
      .get("http://localhost/capstone/submit.php?action=getDeadlineToday")
      .then((response) => {
        setData((prev) => ({
          ...prev,
          deadlineToday: response.data.transactionDeadline,
        }));
      })
      .catch((error) => {
        console.error("There was na error", error);
      });
  }

  return (
    <section className="container">
      <div className="p-0 gap-2">
        <div className="d-flex justify-content-around">
          <Link
            className="btn btn-transparent card"
            style={{ width: "13em" }}
            to="/transaction"
          >
            <span className="fw-bold" style={{ fontSize: "4em" }}>
              {data.tasksToday}
            </span>
            <div className="fs-5 p-2 text-capitalize">Tasks</div>
          </Link>
          <Link
            className="btn btn-transparent card"
            style={{ width: "13em" }}
            to="/transaction"
          >
            <span className="fw-bold" style={{ fontSize: "4em" }}>
              {data.deadlineToday}
            </span>
            <div className="fs-5 p-2 text-capitalize">Deadline today</div>
          </Link>
          <div className="text-center card" style={{ width: "13em" }}>
            <span className="fw-bold" style={{ fontSize: "4em" }}>
              {data.ordersToday ? data.ordersToday : 0}
            </span>
            <div className="fs-5 p-2 text-capitalize">orders made</div>
          </div>
          <div className="text-center card" style={{ width: "13em" }}>
            <span className="fw-bold" style={{ fontSize: "4em" }}>
              {data.ordersFinished ? data.ordersFinished : 0}
            </span>
            <div className="fs-5 p-2 text-capitalize">orders finished</div>
          </div>
        </div>

        {/* if clicked show linechart of earnings on that timeframe
         Total orders/today this week/ months
        Top selling products
        Low stock alert
        Pending deliveries
        Pwedi mn nga top 3 or 5 lang Ng products butang beng sa graph
        Tapus total order Muna Ang report tanan lang order butang mo.. 
        top customer by quantity and sales */}

        <OrderData />

        <div className="card ">{/* line chart for each item sales */}</div>
      </div>
    </section>
  );
};

export default Dashboard;
