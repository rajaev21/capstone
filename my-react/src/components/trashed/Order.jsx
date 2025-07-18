import React, { useEffect, useState } from "react";
import OrderForm from "./OrderForm";
import CustomerForm from "./CustomerForm";
import DesignForm from "./DesignForm";

const Order = ({brand, type, color, size}) => {
  const [responseMessage, setResponseMessage] = useState(
    "Fill out the required information"
  );
  const [print, setPrint] = useState(1);
  const [order, setOrder] = useState([]);
  const [orderCount, setOrderCount] = useState(0);
  const [deadline, setDeadline] = useState("");
  const [note, setNote] = useState("");
  const [designName, setDesignName] = useState("");
  const [customerForm, setCustomerForm] = useState({
    firstname: "",
    lastname: "",
    phonenumber: "",
    facebook: "",
    gmail: "",
    address: "",
  });

  const data = {
    customerForm,
    order,
    transaction: {
      user_id: 1,
      deadline: deadline,
      note: note,
    },
    design: {
      designName: designName,
    },
    action: "submitOrder",
  };

  useEffect(() => {
    console.log(order);
  }, [order]);

  const handleCustomerFormChange = (e) => {
    const { name, value } = e.target;
    setCustomerForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const changePrint = (e) => {
    setPrint(e.target.value);
    setOrder([]);
    setOrderCount(0);
  };

  const addOrder = () => {
    const newOrderKey = orderCount + 1;
    setOrder((prevOrder) => ({
      ...prevOrder,
      [newOrderKey]: { size: "1", color: "1", quantity: "", brand: "1" },
    }));
    setOrderCount(newOrderKey);
  };

  const updateOrder = (key, field, value) => {
    setOrder((prevOrder) => ({
      ...prevOrder,
      [key]: {
        ...prevOrder[key],
        [field]: value,
      },
    }));
  };

  const removeOrder = (key) => {
    setOrder((prevOrder) => {
      const { [key]: _, ...rest } = prevOrder;
      return rest;
    });
  };

  const validateOrder = (e) => {
    let readySubmit = true;
    let errorMessage = "";
    for (const [key, value] of Object.entries(order)) {
      console.log(value);
      const { quantity } = value;
      if (quantity === "" || quantity === "0" || quantity === 0) {
        errorMessage = "Fill all order quantity";
        readySubmit = false;
        break;
      }
    }

    if (Object.keys(order).length === 0) {
      setResponseMessage("Enter an order first");
    } else if (customerForm.firstname === "" || customerForm.lastname === "") {
      setResponseMessage("Firstname  and lastname field are required.");
    } else if (
      customerForm.phonenumber.length !== 11 ||
      customerForm.phonenumber.slice(0, 2) !== "09"
    ) {
      setResponseMessage("Please enter a valid phone number");
    } else if (!readySubmit) {
      setResponseMessage(errorMessage);
      console.log("Not ready for submit");
    } else {
      submitOrder(e);
      console.log("ready for submit");
    }
  };

  const submitOrder = async (e) => {
    e.preventDefault();
    setResponseMessage("");

    try {
      const response = await fetch("http://localhost/capstone/submit.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      setResponseMessage(result.message);
      console.log(result.message);
      setOrder({});
      setOrderCount(0);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Transaction Form</h2>
      <CustomerForm
        customerForm={customerForm}
        handleCustomerFormChange={handleCustomerFormChange}
      />

      <div>
        <label>Select a print type:</label>
        <select value={print} onChange={changePrint}>
          <option value="1">DTF</option>
          <option value="2">Sublimation</option>
          <option value="3">Embroidery</option>
        </select>
      </div>

      {print === 1 && (
        <div>
          <button onClick={addOrder}>Add Order</button>
          {Object.entries(order).map(([key, value]) => (
            <OrderForm
              key={key}
              removeOrder={removeOrder}
              orderKey={key}
              orderData={value}
              updateOrder={updateOrder}
              brand={brand}
              type={type}
              color={color}
              size={size}
            />
          ))}
        </div>
      )}

      <div>
        <label>Deadline:</label>
        <input
          type="date"
          id="deadline"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />
      </div>

      <div>
        <label>Note:</label>
        <textarea
          name="note"
          id="note"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
      </div>
      <DesignForm designName={designName} setDesignName={setDesignName} />
      <button type="submit" onClick={validateOrder}>
        Submit Order
      </button>

      {responseMessage && <div>{responseMessage}</div>}
    </div>
  );
};

export default Order;
