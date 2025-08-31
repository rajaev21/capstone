import { useNavigate, useLocation } from "react-router-dom";
import TransactionTable from "./TransactionTable";
import CustomerDetails from "./CustomerDetails";
import axios from "axios";

const WelcomePage = ({
  transaction,
  setTransaction,
  fetchTransaction,
  status,
  inventory,
  brand,
  color,
}) => {
  const pending =
    Array.isArray(transaction) &&
    transaction.filter((item) => item.status === "pending");
  // console.log(pending);
  const finished =
    Array.isArray(transaction) &&
    transaction.filter((item) => item.status === "finished");

  const expired =
    Array.isArray(transaction) &&
    transaction.filter((item) => item.status === "expired");
  const voided =
    Array.isArray(transaction) &&
    transaction.filter((item) => item.status === "voided");

  Array.isArray(pending) &&
    pending.forEach((item) => {
      const data = {};
      if (
        Math.floor(Date.now() / 1000) >
        Math.floor(new Date(item.deadline).getTime() / 1000)
      ) {
        data.action = "setTransactionStatus";
        data.id = item.transaction_id;
        data.table = "transaction_detail";
        data.status = 5;
        axios
          .post("http://localhost/capstone/submit.php", data, {
            headers: { "Content-Type": "application/json" },
          })
          .then((res) => {
            console.log(res.data);
            fetchTransaction();
            // window.location.reload();
          });
        console.log(data);
      }
    });

  const navigate = useNavigate();
  const paramID = new URLSearchParams(useLocation().search);
  const id = paramID.get("id");

  const goto = (id) => {
    navigate(`/transaction?id=${id}`);
  };

  return (
    <div className="container">
      {transaction ? (
        <>
          <div className="row row-cols-2">
            <TransactionTable
              title={"pending"}
              transaction={pending}
              setTransaction={setTransaction}
              fetchTransaction={fetchTransaction}
              goto={goto}
            />
            {id ? (
              <CustomerDetails
                id={id}
                status={status}
                inventory={inventory}
                brand={brand}
                color={color}
              />
            ) : (
              <div className="d-flex justify-content-center">
                <div className="text-center fs-3 fw-bold">
                  Click view more to view Order Details
                </div>
              </div>
            )}
            <TransactionTable
              title={"finished"}
              transaction={finished}
              setTransaction={setTransaction}
              fetchTransaction={fetchTransaction}
              goto={goto}
            />

            <TransactionTable
              title={"expired"}
              transaction={expired}
              setTransaction={setTransaction}
              fetchTransaction={fetchTransaction}
              goto={goto}
            />
            <TransactionTable
              title={"voided"}
              transaction={voided}
              setTransaction={setTransaction}
              fetchTransaction={fetchTransaction}
              goto={goto}
            />
          </div>
        </>
      ) : (
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      )}
    </div>
  );
};

export default WelcomePage;
