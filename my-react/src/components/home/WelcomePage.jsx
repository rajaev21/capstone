import { useNavigate, useLocation } from "react-router-dom";
import TransactionTable from "./TransactionTable";
import CustomerDetails from "./CustomerDetails";

const WelcomePage = ({ transaction, setTransaction, fetchTransaction }) => {
  const navigate = useNavigate();
  const paramID = new URLSearchParams(useLocation().search);
  const id = paramID.get("id");

  const goto = (id) => {
    navigate(`/home?id=${id}`);
  };

  const finishOrder = () => {};

  return (
    <div className="container">
      <div className="row">
        <div className="col-6 d-flex justify-content-end">
          <TransactionTable
            transaction={transaction}
            setTransaction={setTransaction}
            fetchTransaction={fetchTransaction}
            goto={goto}
          />
        </div>
        <div className="col-6">
          {id ? (
            <CustomerDetails id={id} />
          ) : (
            <div className="">View Detail</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
