import React, { useEffect, useState } from "react";

const OrderForm = ({
  order,
  setOrder,
  allBrand,
  allType,
  allColor,
  allSize,
  inventoryCheck,
  setInventoryCheck,
  match,
  setMatch
}) => {
  const [index, setIndex] = useState(0);
  const [currentOrder, setCurrentOrder] = useState({});

  const addOrder = () => {
    setOrder((prev) => [
      ...prev,
      { brand: "", type: "", color: "", size: "", qty: "" },
    ]);

    setMatch((prev) => [...prev, ""]);
  };
  const clearOrder = () => {
    setOrder([{ brand: "", type: "", color: "", size: "", qty: "" }]);
    setIndex(0);
    setMatch([]);
  };

  useEffect(() => {
    checkAvailability(index);
    setCurrentOrder(order[index]);
    
  }, [order]);

  const changeItem = (e, index) => {
    const { value, name } = e.target;

    setOrder((prev) => {
      const array = [...prev];
      array[index] = { ...array[index], [name]: value };
      return array;
    });

    setIndex(index);
  };

  const removeOrder = (paramIndex) => {
    setOrder((prevOrder) => prevOrder.filter((_, i) => i !== paramIndex));
    setMatch((prev) => prev.filter((_, i) => i !== paramIndex));
  };

  const checkAvailability = (index) => {
    const currentOrder = order[index];
    if (currentOrder) {
      const match =
        Array.isArray(inventoryCheck) &&
        inventoryCheck.find(
          (item) =>
            item.brand === Number(currentOrder.brand) &&
            item.type === Number(currentOrder.type) &&
            item.color === Number(currentOrder.color) &&
            item.size === Number(currentOrder.size)
        );

      const matchOrder =
        Array.isArray(order) &&
        order.find(
          (item, i) =>
            i !== index &&
            item.brand === currentOrder.brand &&
            item.type === currentOrder.type &&
            item.color === currentOrder.color &&
            item.size === currentOrder.size &&
            currentOrder.brand !== "" &&
            currentOrder.type !== "" &&
            currentOrder.color !== "" &&
            currentOrder.size !== ""
        );

      if (matchOrder) {
        alert(`Order type already exist`);
        setOrder((prev) => {
          const updated = [...prev];
          updated[index] = {
            ...updated[index],
            brand: "",
            type: "",
            color: "",
            size: "",
          };
          return updated;
        });
        setMatch((prev) => {
          const array = [...prev];
          array[index] = "";
          return array;
        });
      }

      if (match) {
        setMatch((prev) => {
          const updated = [...prev];
          updated[index] = match.qty - currentOrder.qty;
          return updated;
        });

        if (match.qty < currentOrder.qty) {
          alert(
            `Available quantity is ${match.qty}, but you entered ${currentOrder.qty}`
          );
          setOrder((prev) => {
            const updated = [...prev];
            updated[index] = { ...updated[index], qty: "" };
            return updated;
          });
        }
      } else {
        setMatch((prev) => {
          const updated = [...prev];
          updated[index] = "";
          return updated;
        });
      }
    }
  };

  return (
    <div>
      <h1>Order:</h1>
      <button onClick={() => addOrder()}>Add Order</button>
      <button onClick={() => clearOrder()}>Clear</button>

      {Array.isArray(order) &&
        order.map((item, index) => (
          <div key={index} className="">
            {/* brand */}
            <select
              name="brand"
              value={item.brand}
              onChange={(e) => changeItem(e, index)}
            >
              <option value="">Select Brand</option>
              {Array.isArray(allBrand) &&
                allBrand.map((brandItem, brandIndex) => (
                  <option key={brandIndex} value={brandItem.brand_id}>
                    {brandItem.brand_name}
                  </option>
                ))}
            </select>
            {/* type */}
            <select
              name="type"
              value={item.type}
              onChange={(e) => changeItem(e, index)}
            >
              <option value="">Select Type</option>
              {Array.isArray(allType) &&
                allType.map((allTypeItem) => (
                  <option value={allTypeItem.type_id}>
                    {allTypeItem.type_name}
                  </option>
                ))}
            </select>
            {/* color */}
            <select
              name="color"
              value={item.color}
              onChange={(e) => changeItem(e, index)}
            >
              <option value="">Select Color</option>
              {Array.isArray(allColor) &&
                allColor.map((allColorItem) => (
                  <option value={allColorItem.color_id}>
                    {allColorItem.color_name}
                  </option>
                ))}
            </select>
            {/* type */}
            <select
              name="size"
              value={item.size}
              onChange={(e) => changeItem(e, index)}
            >
              <option value="">Select Size</option>
              {Array.isArray(allSize) &&
                allSize.map((allSizeItem) => (
                  <option value={allSizeItem.size_id}>
                    {allSizeItem.size_name}
                  </option>
                ))}
            </select>
            {/* quantity */}
            <input
              type="number"
              name="qty"
              value={item.qty}
              onChange={(e) => changeItem(e, index)}
              placeholder="Enter Quantity"
            />
            {index > 0 && (
              <button onClick={() => removeOrder(index)}>Remove</button>
            )}

            {match[index] ? (
              <p>Available Quantity: {match[index]}</p>
            ) : (
              <p>Out of Stock</p>
            )}
          </div>
        ))}
    </div>
  );
};

export default OrderForm;
