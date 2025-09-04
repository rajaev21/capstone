import axios from "axios";
import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

const CustomerSales = ({}) => {
  const [customers, setCustomers] = useState([
    ["Name", "Grand Total", "Quantity"],
    ["c1", 1000, 400],
  ]);
  const options = {
    chart: {
      title: "Company Performance",
      subtitle: "Sales and Expenses over the Years",
    },
    legend: { position: "bottom" },
  };

  useEffect(() => {
    axios
      .get("http://localhost/capstone/submit.php?action=getCustomerSalesQty")
      .then((response) => {
        const rows = response.data.map((item) => [
          item.fullname,
          Number(item.grandTotal),
          Number(item.totalQuantity),
        ]);
        setCustomers([["Name", "Grand Total", "Quantity"], ...rows]);
      });
  }, []);
  console.log(customers);
  return (
    <section>
      <Chart
        chartType="BarChart"
        options={options}
        data={customers}
        width={"100%"}
        height={"300px"}
      />
    </section>
  );
};

export default CustomerSales;
