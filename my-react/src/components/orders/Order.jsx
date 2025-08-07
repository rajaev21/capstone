import React, { useState, useEffect } from "react";
import axios from "axios";
import CustomerForm from "./CustomerForm";
import TransansactionForm from "./TransansactionForm";
import TestOrderForm from "./Inventory";
import CurrentOrder from "./CurrentOrder";

const Order = ({
  inventory,
  brand,
  type,
  color,
  size,
  inventoryCheck,
  setInventoryCheck,
  fetchInventoryCheck,
  fetchInventory,
  fetchLogs,
  placement,
  setPlacement,
}) => {
  const [customerDetail, setCustomerDetail] = useState({
    firstname: "",
    lastname: "",
    phonenumber: "",
    facebook: "",
    gmail: "",
    address: "",
  });
  const [order, setOrder] = useState([]);
  const [transaction, setTransaction] = useState({
    user_id: "",
    deadline: "",
    note: "",
    placement: "",
  });

  useEffect(() => {
    const account = JSON.parse(localStorage.getItem("account"));
    if (account) {
      setTransaction((prev) => ({
        ...prev,
        user_id: account.user_id,
      }));
    }
    console.log(inventoryCheck);
  }, []);

  const addOrder = () => {
    if (customerDetail.firstname === "") {
      alert("Please fill firstname.");
      return;
    }
    if (customerDetail.lastname === "") {
      alert("Please fill lastname.");
      return;
    }
    if (customerDetail.phonenumber === "") {
      alert("Please fill phone number.");
      return;
    }
    if (transaction.user_id === "") {
      alert("Please fill transaction id.");
      return;
    }
    if (transaction.deadline === "") {
      alert("Please set a deadline.");
      return;
    }
    if (order.length === 0) {
      alert("Please set orders.");
      return;
    }

    const data = { action: "submitOrder", transaction, customerDetail, order };

    axios
      .post("http://localhost/capstone/submit.php", data, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        console.log(response.data);
        alert("Order submitted successfully");
        setOrder([
          {
            brand: "",
            type: "",
            color: "",
            size: "",
            qty: "",
          },
        ]);
        setCustomerDetail({
          firstname: "",
          lastname: "",
          phonenumber: "",
          facebook: "",
          gmail: "",
          address: "",
        });
        setTransaction({
          user_id: "",
          deadline: "",
          note: "",
        });
        window.location.reload();
      })
      .catch((error) => {
        console.error("There was an error submitting the order!", error);
      });
  };

  return (
    <>
      <div className="container">
        {placement.length > 0 ? (
          <div className="row">
            <div className="col">
              <TestOrderForm
                inventory={inventory}
                order={order}
                setOrder={setOrder}
                placement={placement}
              />
            </div>
            <div className="col">
              <CustomerForm
                customerDetail={customerDetail}
                setCustomerDetail={setCustomerDetail}
              />
              {/* <OrderForm
                    order={order}
                    setOrder={setOrder}
                    allBrand={brand}
                    allType={type}
                    allColor={color}
                    allSize={size}
                    inventoryCheck={inventoryCheck}
                    setInventoryCheck={setInventoryCheck}
                    match={match}
                    setMatch={setMatch}
                  /> */}

              <TransansactionForm
                transaction={transaction}
                setTransaction={setTransaction}
              />
              {order.length == 0 ? (
                <div className=""></div>
              ) : (
                <div className="">
                  <CurrentOrder
                    inventory={inventory}
                    order={order}
                    setOrder={setOrder}
                  />
                  <button
                    className="btn btn-success"
                    onClick={() => addOrder()}
                  >
                    {" "}
                    Submit Order{" "}
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => window.location.reload()}
                  >
                    {" "}
                    Cancel Order{" "}
                  </button>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="spinner-border m-5" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
      </div>
    </>
  );
};

export default Order;
