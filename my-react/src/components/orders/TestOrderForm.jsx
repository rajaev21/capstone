import { useState } from "react";

const TestOrderForm = ({ inventory, order, setOrder }) => {
  const [newInventory, setNewInventory] = useState([]);

  useState(() => {
    setNewInventory(inventory);
  }, []);

  const addOrder = (item, index) => {
    setOrder((prev) => [...prev, { ...item, qty: 1 }]);
  };

  function inOrder(id) {
    return order.some((item) => item.id === id);
  }

  function removeOrder(id) {
    setOrder((prev) => prev.filter((item, index) => index !== id));
  }

  function qtyChange(index, e, id) {
    const { value } = e.target;
    console.log(Number(value), id);
    const isOver = newInventory.some(
      (item) => item.qty < Number(value) && item.id === Number(id)
    );
    // const newItem = newInventory.map((item) => item.id);
    // console.log(newItem);
    console.log("is over", isOver);
    if (Number(value) < 1) {
      alert("Order cant be less than 1.");
      return;
    }
    if (!isOver) {
      setOrder((prev) => {
        const arr = [...prev];
        arr[index] = { ...arr[index], qty: value };
        return arr;
      });
    } else {
      alert("The order amount is more than what's in stock.");
      return;
    }
  }

  console.log(newInventory);
  console.log(order);

  return (
    <>
      <div className="container">
        <button
          onClick={() => {
            setOrder([]);
          }}
        >
          Clear Order
        </button>
        <table className="table">
          <thead>
            <tr>
              <th>Brand</th>
              <th>Type</th>
              <th>Color</th>
              <th>Size</th>
              <th>Price</th>
              <th>Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(newInventory) &&
              newInventory.map(
                (item, index) =>
                  item.qty !== 0 &&
                  item.price !== 0 && (
                    <tr>
                      <td className="text-capitalize"> {item.brand} </td>
                      <td className="text-capitalize"> {item.type} </td>
                      <td className="text-capitalize"> {item.color} </td>
                      <td className="text-uppercase"> {item.size} </td>
                      <td className="text-capitalize"> {item.price} </td>
                      <td className="text-capitalize"> {item.qty} </td>
                      <td>
                        <button
                          className="btn btn-primary"
                          onClick={() => {
                            addOrder(item);
                          }}
                          disabled={inOrder(item.id)}
                        >
                          Order
                        </button>
                      </td>
                    </tr>
                  )
              )}
          </tbody>
        </table>
        {order.length > 0 &&
          order.map((item, index) => (
            <div className="row">
              <div className="col">
                <p>
                  {`${item.brand} --- ${item.type} --- ${item.color} --- ${item.size}`}
                </p>
              </div>
              <div className="col">
                <input
                  type="number"
                  value={item.qty}
                  onChange={(e) => {
                    qtyChange(index, e, item.id);
                  }}
                />
              </div>
              <div className="col">
                <p>{item.qty * item.price}</p>
              </div>
              <div className="col">
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    removeOrder(index);
                  }}
                >
                  Remove Order
                </button>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default TestOrderForm;
