import { useState } from "react";
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
  const [addOrder, setAddOrder] = useState(false);
  const pending =
    Array.isArray(transaction) &&
    transaction.filter(
      (item) => item.status === "pending" || item.status === "ongoing"
    );
  const finished =
    Array.isArray(transaction) &&
    transaction.filter(
      (item) => item.status !== "pending" && item.status !== "ongoing"
    );
  const data = {};
  
  // pending.forEach((item) => {
  //   if (
  //     Math.floor(Date.now() / 1000) >
  //     Math.floor(new Date(item.deadline).getTime() / 1000) + 86399
  //   ) {
  //      setExpired(item);
  //   }
  // });

  // async function setExpired(item) {
  //   data.action = "setTransactionExpired";
  //   data.id = item.transaction_id;
  //   data.table = "transaction_detail";
  //   data.discount = item.discount;
  //   console.log(data);
  //   axios
  //     .post("http://localhost/capstone/submit.php", data, {
  //       headers: { "Content-Type": "application/json" },
  //     })
  //     .then((res) => {
  //       console.log(res.data);
  //       window.location.reload();
  //     });
  // }

  const navigate = useNavigate();
  const paramID = new URLSearchParams(useLocation().search);
  const id = paramID.get("id");

  const goto = (id) => {
    navigate(`/transaction?id=${id}`);
  };
  // console.log(transaction);
  return (
    <div className="">
      {transaction ? (
        <>
          <div className={!addOrder && "row row-cols-2"}>
            <div className={addOrder ? "d-none" : "d-flex flex-column gap-3"}>
              <TransactionTable
                title={"pending"}
                transaction={pending}
                setTransaction={setTransaction}
                fetchTransaction={fetchTransaction}
                goto={goto}
              />
              <hr />
              <TransactionTable
                title={"Others"}
                transaction={finished}
                setTransaction={setTransaction}
                fetchTransaction={fetchTransaction}
                goto={goto}
              />
            </div>
            {id ? (
              <CustomerDetails
                id={id}
                status={status}
                inventory={inventory}
                brand={brand}
                color={color}
                fetchTransaction={fetchTransaction}
                addOrder={addOrder}
                setAddOrder={setAddOrder}
              />
            ) : (
              <div className="d-flex justify-content-center">
                <div className="text-center fs-3 fw-bold">
                  Click view more to view Order Details
                </div>
              </div>
            )}
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
