import React, { useState, useEffect } from "react";
import axios from "axios";
import OrderForm from "./OrderForm";
import CustomerForm from "./CustomerForm";
import TransansactionForm from "./TransansactionForm";
import TestOrderForm from "./TestOrderForm";
import Design from "./Design";

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
      alert("Please fill deadline.");
      return;
    }
    if(order.length === 0){
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
        setOrder([]);
        fetchInventoryCheck();
        fetchInventory();
        fetchLogs();
      })
      .catch((error) => {
        console.error("There was an error submitting the order!", error);
      });
  };

  return (
    <>
      {Array.isArray(placement) && placement.length > 0 ? (
        <div className="container">
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

          {Array.isArray(inventory) && (
            <TestOrderForm
              inventory={inventory}
              order={order}
              setOrder={setOrder}
              placement={placement}
            />
          )}

          {Array.isArray(placement) && (
            <TransansactionForm
              transaction={transaction}
              setTransaction={setTransaction}
            />
          )}

          <button onClick={() => addOrder()}> Submit Order </button>
        </div>
      ) : (
        <div className="spinner-border m-5" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
    </>
  );
};

export default Order;
