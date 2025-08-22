import Stocks from "./charts/Stocks";

const Dashboard = ({ inventory, color }) => {
  return (
    <section className="container">
      <div class="card p-0">
        <div class="card-body ">
          <Stocks inventory={inventory} color={color} />
        </div>
      </div>
      <hr />
      <div className="row row-cols-2 gap-2">
        <div className="col p-0">
          <div class="card p-0">
            <div class="card-body">This is some text within a card body.</div>
          </div>
        </div>
        <div className="col p-0">
          <div class="card">
            <div class="card-body">This is some text within a card body.</div>
          </div>
        </div>
        <div className="col p-0">
          <div class="card">
            <div class="card-body">This is some text within a card body.</div>
          </div>
        </div>
        <div className="col p-0">
          <div class="card">
            <div class="card-body">This is some text within a card body.</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
