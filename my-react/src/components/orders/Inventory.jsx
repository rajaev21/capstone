import { useState } from "react";

const TestOrderForm = ({ inventory, order, setOrder }) => {
  const [search, setSearch] = useState("");
  const [newInventory, setNewInventory] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const filteredItems =
    Array.isArray(newInventory) &&
    newInventory.filter((item) =>
      Object.values(item).some((val) =>
        String(val).toLowerCase().includes(search.toLowerCase())
      )
    );
  const itemsPerPage = 15;
  const start = pageCount * itemsPerPage;
  const end = start + itemsPerPage;
  const currentItems = filteredItems.slice(start, end);
  const totalPage = Math.ceil(filteredItems.length / itemsPerPage);

  useState(() => {
    setNewInventory(inventory);
  }, []);

  const addOrder = (item, index) => {
    setOrder((prev) => [...prev, { ...item, qty: 1 }]);
  };

  function inOrder(id) {
    return order.some((item) => item.id === id);
  }

  return (
    <>
      <div>
        <div className="row">
          <div className="col">
            <h6>
              Search:{" "}
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </h6>
          </div>
          <div className="col d-flex justify-content-end">
            <button
            className="btn btn-danger"
              onClick={() => {
                setOrder([]);
              }}
            >
              Clear Order
            </button>
          </div>
        </div>

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
            {Array.isArray(currentItems) &&
              currentItems.map(
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
        <div className="">
          <nav className="d-flex justify-content-center mt-3">
            <ul className="pagination">
              <li className="page-item">
                <button
                  className="page-link"
                  onClick={() => setPageCount(0)}
                  disabled={pageCount === 0}
                >
                  <span aria-hidden="true">&laquo;</span>
                </button>
              </li>

              <li className="page-item">
                <button
                  className="page-link"
                  onClick={() => setPageCount((prev) => prev - 1)}
                  disabled={pageCount === 0}
                >
                  Previous
                </button>
              </li>

              <li className="page-item">
                <button className="page-link">{pageCount + 1}</button>
              </li>

              <li className="page-item">
                <button
                  className="page-link"
                  onClick={() => setPageCount((prev) => prev + 1)}
                  disabled={pageCount + 1 >= totalPage}
                  style={{ width: "80px" }}
                >
                  Next
                </button>
              </li>

              <li className="page-item">
                <button
                  className="page-link"
                  onClick={() => setPageCount(totalPage - 1)}
                  disabled={pageCount === totalPage - 1}
                >
                  <span aria-hidden="true">&raquo;</span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default TestOrderForm;
