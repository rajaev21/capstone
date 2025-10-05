import React, { useState, useEffect } from "react";

const OrderDetails = () => {
  const [order, setOrder] = useState([]);

  // useEffect(() => {

  //   const fetchOrder = async () => {
  //     const data = {
  //       action : 'getOrderByID'
  //     }

  //     try {
  //       const response = await fetch("http://localhost/capstone/submit.php?", {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify(data),
  //       });
  
  //       const result = await response.json();
  
  //       console.log(result);
  //     } catch (error) {
  //       console.log(error);
  //     }

  //   };
  // }, []);

  return (
    <div>
      <h2>Order Details</h2>
      <div>
        {/* {order.length === 0 ? (
          <p>Loading order data...</p>
        ) : (
          <div>
            <p><strong>Order ID:</strong> {order.id}</p>
            <p><strong>Quantity:</strong> {order.quantity}</p>
            <p><strong>Color:</strong> {order.color}</p>
            <p><strong>Size:</strong> {order.size}</p>
            <p><strong>Brand:</strong> {order.brand}</p>
            <p><strong>Design Name:</strong> {order.design_name}</p>
            <p><strong>Customer:</strong> {order.customer_firstname} {order.customer_lastname}</p>
            <p><strong>Note:</strong> {order.note}</p>
            <p><strong>Created At:</strong> {order.date}</p>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default OrderDetails;
