import React from "react";

const OrderForm = ({removeOrder, orderKey, orderData, updateOrder, brand, type, color, size }) => {
  console.log(color)
  return (
    <div>
      <h1>Order:{orderKey}</h1>
      <div>
        <label>Brand:</label>
        <select
          value={orderData.brand}
          onChange={(e) => updateOrder(orderKey, "brand", e.target.value)}
        >
          <option value="1">Lucky Hanna</option>
          <option value="2">Dannon</option>
        </select>
      </div>
      <div>
        <label>Type:</label>
        <select
          value={orderData.type}
          onChange={(e) => updateOrder(orderKey, "type", e.target.value)}
        >
          <option value="1">Lucky Hanna</option>
          <option value="2">Dannon</option>
        </select>
      </div>
      <div>
        <label>Color:</label>
        <select
          value={orderData.color}
          onChange={(e) => updateOrder(orderKey, "color", e.target.value)}
        >
          <option value="">Select Color</option>
          {Array.isArray(color) && color.map(item => (
            <option value={item.color_id}>{item.color_name}</option>
          ))}
        </select>
      </div>
      <div>
        <label>Size:</label>
        <select
          value={orderData.size}
          onChange={(e) => updateOrder(orderKey, "size", e.target.value)}
        >
          <option value="">Select size</option>
          {Array.isArray(color) && color.map(item => (
            <option value={item.color_id}>{item.color_name}</option>
          ))}
        </select>
      </div>
      <div>
        <label>Quantity:</label>
        <input
          type="number"
          value={orderData.quantity}
          onChange={(e) => updateOrder(orderKey, "quantity", e.target.value)}
          require
        />
      </div>
      <button onClick={() => removeOrder(orderKey)}>remove</button>
    </div>
  );
};

export default OrderForm;
