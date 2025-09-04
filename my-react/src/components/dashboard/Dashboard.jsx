import CustomerSales from "./charts/CustomerSales";
const Dashboard = ({}) => {
  return (
    <section className="container">
      <div class="p-0 d-flex flex-column gap-2">
        <div className="div">
          4 clickable cards for pending tasks, monthly earnings, annual earnings
        </div>
        {/* if clicked show linechart of earnings on that timeframe */}

        {/* top customer by quantity and sales */}
        <div className="container">
          <div className="col card">
            <CustomerSales />
          </div>
        </div>

        <div class="card ">{/* line chart for each item sales */}</div>
      </div>
    </section>
  );
};

export default Dashboard;
