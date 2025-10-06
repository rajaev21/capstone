import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

const AddNewStocks = ({
  selected,
  size,
  colors,
  filteredInventory,
  getContrastColor,
  getHex,
  fetchInventory,
}) => {
  const [stock, setStock] = useState([]);
  const [buttonLoad, setButtonLoad] = useState(false);
  function reset() {
    setStock([]);
    fetchInventory();
    setButtonLoad(false);
  }

  function addStocks(value, id) {
    setStock((prev) => {
      const index = prev.findIndex((item) => item.id === id);
      const arr = [...prev];
      if (index !== -1) {
        arr[index] = { id, value };
        return arr;
      } else {
        return [...arr, { id, value }];
      }
    });
  }

  function validateInput() {
    if (stock.length === 0) {
      alert("Can't save changes with empty input");
      return;
    }

    setButtonLoad(true);
    const data = {
      action: "addStocks",
      stock: stock,
    };

    console.log(data);
    insertStocks(data);
  }

  function insertStocks(data) {
    axios
      .post("http://localhost/capstone/submit.php", data, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        console.log(res.data);
        reset();
      })
      .then(() => {
        document.querySelector(`#close`)?.click();
      })
      .catch((err) => console.error("Error adding option:", err));
  }

  return (
    <section>
      <div
        className="modal fade"
        id="addStoks"
        tabIndex="-1"
        aria-labelledby="addStoksLabel"
        aria-hidden="true"
        data-bs-backdrop="static"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-capitalize">
                {selected.brand} --- {selected.type}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <table className="table table-sm table-hover">
                <thead>
                  <tr>
                    <th></th>
                    {size
                      .filter((item) =>
                        filteredInventory.find(
                          (matchInventory) =>
                            matchInventory.size === item.size_name
                        )
                      )
                      .map((size) => (
                        <th
                          key={size.size_id}
                          className="text-uppercase text-center"
                        >
                          {size.size_name}
                        </th>
                      ))}
                  </tr>
                </thead>
                <tbody>
                  {colors.map((color) => {
                    const matchID = size
                      .map((s) => {
                        const match = filteredInventory.find(
                          (item) =>
                            color.color === item.color &&
                            item.size === s.size_name
                        );
                        return match ? match.id : 0;
                      })
                      .filter((item) => item !== 0);

                    return (
                      <tr
                        key={color.color}
                        className="text-center text-capitalize"
                      >
                        <td
                          className="col-2"
                          style={{
                            color: getContrastColor(color.color),
                            backgroundColor: getHex(color.color),
                          }}
                        >
                          {color.color}
                        </td>

                        {matchID.map((id) => {
                          const stockItem = stock.find(
                            (item) => item.id === id
                          );
                          const value = stockItem ? stockItem.value : "";

                          return (
                            <td key={id}>
                              <input
                                type="number"
                                style={{ width: "5em" }}
                                value={value}
                                onBlur={(e) => {
                                  if (parseInt(e.target.value, 10) < 0) {
                                    alert("Quantity cannot be negative");
                                    addStocks("", id);
                                  }
                                }}
                                onChange={(e) => addStocks(e.target.value, id)}
                                onKeyDown={(e) => {
                                  if (["-", "+", "e"].includes(e.key)) {
                                    e.preventDefault();
                                  }
                                }}
                                min="0"
                              />
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                id="close"
                onClick={reset}
              >
                Close
              </button>

              {buttonLoad ? (
                <Button variant="primary" disabled>
                  <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                  Loading...
                </Button>
              ) : (
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => validateInput()}
                >
                  Save changes
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddNewStocks;
