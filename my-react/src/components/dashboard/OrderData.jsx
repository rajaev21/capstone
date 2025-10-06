import MonthlyOrders from "./charts/MonthlyOrders";
import WeeklyOrders from "./charts/WeeklyOrders";
import CustomerSales from "./charts/CustomerSales";
const OrderData = ({}) => {
  return (
    <div className="container mt-3">
      <WeeklyOrders />

      <MonthlyOrders />

      <CustomerSales />
      <button className="btn btn-primary spinner-grow">test</button>
    </div>
  );
};

export default OrderData;
