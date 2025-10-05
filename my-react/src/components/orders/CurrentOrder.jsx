import { use, useState } from "react";
const CurrentOrder = ({
  inventory,
  order,
  setOrder,
  discount,
  setDiscount,
}) => {
  const [newInventory, setNewInventory] = useState([]);
  const grandTotal = order.reduce(
    (sum, item) => sum + item.orderQty * item.price,
    0
  );

  useState(() => {
    setNewInventory(inventory);
  }, []);

  function removeOrder(id) {
    setOrder((prev) => prev.filter((item, index) => index !== id));
  }

  function valueCheck(index, e, id) {
    const { value } = e.target;
    const isOver = newInventory.find(
      (item) => id === item.id && value > item.qty
    );
    if (Number(value) < 1) {
      alert("Order cant be less than 1.");
      setOrder((prev) => {
        const arr = [...prev];
        arr[index] = { ...arr[index], orderQty: 1 };
        return arr;
      });
      return;
    }
    if (isOver) {
      alert("The order amount is more than what's in stock.");
      setOrder((prev) => {
        const arr = [...prev];
        arr[index] = { ...arr[index], orderQty: isOver.qty };
        return arr;
      });
      return;
    }
  }

  function qtyChange(index, e, price) {
    const { value } = e.target;
    const total = Number(value) * price;

    setOrder((prev) => {
      const arr = [...prev];
      arr[index] = { ...arr[index], orderQty: value, total: total };
      return arr;
    });
  }
  return (
    <div>
      <table className="table table-bordered table-sm">
        <thead>
          <tr>
            <th>Order</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(newInventory) &&
            order.length > 0 &&
            order.map((item, index) => {
              const total = item.price * item.orderQty;
              return (
                <tr key={index}>
                  <td className="text-capitalize lh-sm">
                    {item.brand} {item.type} {item.color} {item.size}
                  </td>
                  <td>
                    <div className="input-group input-group-sm">
                      <input
                        type="number"
                        class="form-control"
                        placeholder="Enter quantity"
                        value={item.orderQty}
                        onBlur={(e) => valueCheck(index, e, item.id)}
                        onChange={(e) => qtyChange(index, e, item.price)}
                        onKeyDown={(e) => {
                          if (e.key === "-" || e.key === "+" || e.key === "e") {
                            e.preventDefault();
                          }
                        }}
                      />
                    </div>
                  </td>
                  <td className="text-center">{total}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        removeOrder(index);
                      }}
                    >
                      <i class="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <div class="input-group input-group-sm mb-3">
        <span class="input-group-text">Discount ₱</span>
        <input
          type="number"
          class="form-control"
          value={discount}
          onChange={(e) => setDiscount(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "-" || e.key === "+" || e.key === "e") {
              e.preventDefault();
            }
          }}
        />
      </div>
      <div className="fw-bold fs-5 text-center">
        Grand total : {grandTotal - discount}
      </div>
    </div>
  );
};

export default CurrentOrder;
