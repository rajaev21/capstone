import React, { useState, useEffect } from "react";
import axios from "axios";
import CustomerForm from "./CustomerForm";
import TransansactionForm from "./TransansactionForm";
import CurrentOrder from "./CurrentOrder";
import NewInventory from "./NewInventory";

const Order = ({
  inventory,
  brand,
  type,
  color,
  size,
  fetchInventory,
  placement,
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
    fetchInventory()
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
    if (customerDetail.phonenumber.length != 11) {
      alert("Please double check the number.");
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

    console.log(data)
    axios
      .post("http://localhost/capstone/submit.php", data, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        console.log(response.data);
        alert("Order submitted successfully");
        window.location.reload();
      })
      .catch((error) => {
        console.error("There was an error submitting the order!", error);
      });
  };

  console.log(order);

  return (
    <>
      {placement.length > 0 ? (
        <div className="">
          <div className="row row-cols-2 gap-3 vh-100">
            <div className="card col-8">
              <NewInventory
                inventory={inventory}
                brand={brand}
                type={type}
                color={color}
                size={size}
                setOrder={setOrder}
                order={order}
              />
            </div>
            <div className="card col-3 ">
              <div className="fs-5 fw-semibold text-center">Order</div>
              <CustomerForm
                customerDetail={customerDetail}
                setCustomerDetail={setCustomerDetail}
              />

              <TransansactionForm
                transaction={transaction}
                setTransaction={setTransaction}
              />

              <CurrentOrder
                inventory={inventory}
                order={order}
                setOrder={setOrder}
              />
              {order.length > 0 && (
                <div className="d-flex my-3 justify-content-evenly">
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
