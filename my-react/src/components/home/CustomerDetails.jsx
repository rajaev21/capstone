import { useEffect, useState } from "react";
import axios from "axios";

const CustomerDetails = ({ id, status }) => {
  const [details, setDetails] = useState({});
  const [doSwitch, setDoSwitch] = useState(true);
  const [allOrderDone, setAllOrderDone] = useState(false);
  const [transactionFinish, setTransactionFinish] = useState(false);

  useEffect(() => {
    fetchCustomerDetails(id);
  }, [id, doSwitch]);

  const fetchCustomerDetails = (id) => {
    axios
      .get(
        `http://localhost/capstone/submit.php?action=getCustomerDetails&id=${id}`
      )
      .then((response) => {
        if (response.data) {
          setDetails(response.data);
          setAllOrderDone(
            response.data.every((prev) => prev.status === "finished")
          );
          if (
            ["finished", "voided", "expired"].includes(
              response.data[0].transaction_status
            )
          ) {
            setTransactionFinish(true);
          } else {
            setTransactionFinish(false);
          }
        }
      })
      .catch((error) => {
        console.error("There was an error fetching customer details!", error);
      });
  };

  function setDone(order_id, status) {
    const data = {
      id: order_id,
      action: "setStatus",
      table: "orders",
      status: status,
    };
    axios
      .post("http://localhost/capstone/submit.php", data, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        if (res.data) {
          setDoSwitch((prev) => !prev);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  const finishOrder = (id, customer_id) => {
    const data = {
      id: id,
      action: "finishOrder",
      customer_id: customer_id,
    };
    axios
      .post("http://localhost/capstone/submit.php", data, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        if(res.data){
          // window.location.reload();
        }
      });
  };

  console.log(details);

  return (
    <div className="container my-4">
      <button className="btn btn-primary">Extend Expiration Date</button>
      {Array.isArray(details) && details.length > 0 && (
        <>
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">
                {details[0].firstname} {details[0].lastname}
              </h5>
              <p className="card-text mb-1">
                <strong>Phone:</strong> {details[0].phonenumber}
              </p>
              <p className="card-text mb-1">
                <strong>Facebook:</strong> {details[0].facebook}
              </p>
              <p className="card-text mb-1">
                <strong>Gmail:</strong> {details[0].gmail}
              </p>
              <p className="card-text">
                <strong>Address:</strong> {details[0].address}
              </p>
            </div>
          </div>
          <h5>
            Orders
            <button
              className="btn btn-transparent"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <i className="bi bi-plus-circle"></i>
            </button>
          </h5>
          {/* modal start */}
          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Add Order
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">...</div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="table-responsive">
            <table className="table table-bordered table-striped">
              <thead className="table-light">
                <tr>
                  <th>Brand</th>
                  <th>Type</th>
                  <th>Color</th>
                  <th>Size</th>
                  <th>Quantity</th>
                  <th>Status</th>
                  {!transactionFinish && <th>Action</th>}
                </tr>
              </thead>
              <tbody>
                {details.map((item, index) => (
                  <tr key={index}>
                    <td>{item.brand}</td>
                    <td>{item.type}</td>
                    <td>{item.color}</td>
                    <td>{item.size}</td>
                    <td>{item.quantity}</td>
                    <td>{item.status}</td>
                    {!transactionFinish && (
                      <td>
                        {item.status !== "finished" ? (
                          <button
                            className="btn btn-success"
                            onClick={() => {
                              setDone(item.order_id, 3);
                            }}
                          >
                            {" "}
                            Done{" "}
                          </button>
                        ) : (
                          <button
                            className="btn btn-danger"
                            onClick={() => {
                              setDone(item.order_id, 2);
                            }}
                          >
                            {" "}
                            Set to ongoing{" "}
                          </button>
                        )}

                        <button className="btn btn-danger">
                          {" "}
                          Cancel Order{" "}
                        </button>
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {transactionFinish ? (
            <div className="fw-bold fs-3 text-center">Transaction Done</div>
          ) : (
            <div className="">
              <p className="h6">
                Clicking the "Finish Order" button will send an SMS notification
                to the registered customer's phone number, informing them that
                their order is ready for pickup.
              </p>
              <button
                className="btn btn-success"
                onClick={() => {
                  finishOrder(id, details[0].customer_id);
                }}
                disabled={!allOrderDone}
              >
                Finish Order
              </button>
              <button className="btn btn-danger">Cancel Transaction</button>
            </div>
          )}
        </>
      )}
      {Array.isArray(details) && details.length === 0 && (
        <div className="alert alert-info">No customer details found.</div>
      )}
    </div>
  );
};

export default CustomerDetails;
