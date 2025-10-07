import MonthlyOrders from "./charts/MonthlyOrders";
import WeeklyOrders from "./charts/WeeklyOrders";
import CustomerSales from "./charts/CustomerSales";
const OrderData = ({}) => {
  return (
    <div className="container mt-3">
      <WeeklyOrders />

      <MonthlyOrders />

      <CustomerSales />
    </div>
  );
};

export default OrderData;
