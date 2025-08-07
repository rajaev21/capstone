import { useState } from "react";
const CurrentOrder = ({ inventory, order, setOrder }) => {
  const [newInventory, setNewInventory] = useState([]);

  useState(() => {
    setNewInventory(inventory);
  }, []);

  function removeOrder(id) {
    setOrder((prev) => prev.filter((item, index) => index !== id));
  }

  function valueCheck(index, e, id) {
    const { value } = e.target;
    const isOver = newInventory.some(
      (item) => item.qty < Number(value) && item.id === Number(id)
    );

    if (Number(value) < 1) {
      alert("Order cant be less than 1.");
      setOrder((prev) => {
        const arr = [...prev];
        arr[index] = { ...arr[index], qty: 1 };
        return arr;
      });
      return;
    }
    if (isOver) {
      alert("The order amount is more than what's in stock.");
      setOrder((prev) => {
        const arr = [...prev];
        arr[index] = { ...arr[index], qty: 1 };
        return arr;
      });
      return;
    }
  }

  function qtyChange(index, e, id) {
    const { value } = e.target;

    setOrder((prev) => {
      const arr = [...prev];
      arr[index] = { ...arr[index], qty: value };
      return arr;
    });
  }
  return (
    <table>
      <thead>
        <tr>
          <th>Order</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {Array.isArray(newInventory) &&
          order.length > 0 &&
          order.map((item, index) => (
            <tr>
              <td className="text-capitalize">
                {item.brand} {item.type} {item.color} {item.size}
              </td>
              <td>
                <input
                  onBlur={(e) => valueCheck(index, e, item.id)}
                  type="number"
                  value={item.qty}
                  onChange={(e) => {
                    qtyChange(index, e, item.id);
                  }}
                />
              </td>
              <td>{item.qty * item.price}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    removeOrder(index);
                  }}
                >
                  Remove Order
                </button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default CurrentOrder;
