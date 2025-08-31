import { useEffect, useState } from "react";
import axios from "axios";
import VerifyModal from "./subComponents/VerifyModal";
import VerifyTransaction from "./subComponents/VerifyTransaction";
import AddOrder from "./subComponents/AddOrder";
import CancelTransaction from "./subComponents/CancelTransaction";

const CustomerDetails = ({ id, status, inventory, brand, color }) => {
  const [details, setDetails] = useState({});
  const [allOrderDone, setAllOrderDone] = useState(false);
  const [deadline, setDeadline] = useState("");
  const data = {};
  useEffect(() => {
    fetchCustomerDetails(id);
  }, [id]);

  const fetchCustomerDetails = (id) => {
    axios
      .get(
        `http://localhost/capstone/submit.php?action=getCustomerDetails&id=${id}`
      )
      .then((response) => {
        // console.log(response.data);
        setDetails(response.data);
        setDeadline(response.data[0].deadline);
        if (response.data) {
          setAllOrderDone(
            response.data.every(
              (prev) => prev.status === "finished" || prev.status === "voided"
            )
          );
        }
      })
      .catch((error) => {
        console.error("There was an error fetching customer details!", error);
      });
  };

  function setDone(orderID, orderStatus, orderQty, title) {
    data.id = orderID;
    data.action = "setStatus";
    data.table = "orders";
    data.status = orderStatus;
    data.title = title;
    if (title === "cancel" || title == "reorder") {
      data.qty = orderQty;
    }
    axios
      .post("http://localhost/capstone/submit.php", data, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        console.log(res.data);
        fetchCustomerDetails(id);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  const finishOrder = (id, customer_id) => {
    data.id = id;
    data.action = "finishOrder";
    data.customer_id = customer_id;
    axios
      .post("http://localhost/capstone/submit.php", data, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        if (res.data) {
          window.location.reload();
        }
      });
  };

  function cancelTransaction(transactionID, phonenumber, firstname, lastname) {
    data.transactionID = transactionID;
    data.action = "cancelTransaction";
    data.phonenumber = phonenumber;
    data.firstname = firstname;
    data.lastname = lastname;
    axios
      .post("http://localhost/capstone/submit.php", data, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        if (res.data) {
          console.log(res.data);
          window.location.reload();
        }
      });
  }

  function extendDeadline(e, transactionID) {
    const unix = Math.floor(new Date(e).getTime() / 1000);
    const prevDeadline = Math.floor(new Date(deadline).getTime() / 1000);

    if (unix < prevDeadline) {
      alert("Select future date");
      return;
    }

    data.action = "extendDeadline";
    data.deadline = unix;
    data.transactionID = id
    axios
      .post("http://localhost/capstone/submit.php", data, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        if (res.data) {
          console.log(res.data);
          window.location.reload();
        }
      });
  }

  return (
    <div className="container mb-4">
      {Array.isArray(details) && details.length > 0 ? (
        <>
          <div className="card mb-4">
            <div className="card-body">
              <div class="input-group d-flex mb-2">
                <span
                  class="input-group-text text-capitalize"
                  id="basic-addon1"
                >
                  extend date here
                </span>
                <input
                  type="date"
                  class="form-control"
                  placeholder="Username"
                  value={details[0].deadline}
                  onChange={(e) => extendDeadline(e.target.value)}
                />
              </div>
              <h5 className="card-title text-capitalize">{`${details[0].firstname} ${details[0].lastname}`}</h5>
              <p className="card-text mb-1">
                <strong>Phone:</strong> {details[0].phonenumber}
              </p>
              <p className="card-text mb-1">
                <strong>Address:</strong> {details[0].address}
              </p>
              <p className="card-text">
                <strong>Note:</strong> {details[0].note}
              </p>
            </div>
          </div>
          <h5>
            Orders
            <button
              className="btn btn-transparent"
              data-bs-toggle="modal"
              data-bs-target="#addOrder"
            >
              <i className="bi bi-plus-circle"></i>
            </button>
          </h5>
          <AddOrder
            inventory={inventory}
            brand={brand}
            color={color}
            transactionID={details[0].transaction_id}
          />
          {/* modal start */}

          <div className="table-responsive">
            <table className="table table-bordered table-striped">
              <thead className="table-light">
                <tr>
                  <th>Brand</th>
                  <th>Type</th>
                  <th>Color</th>
                  <th>Size</th>
                  <th>QTY</th>
                  <th>Status</th>
                  {["ongoing", "pending"].includes(
                    details[0].transaction_status
                  ) && <th>Action</th>}
                </tr>
              </thead>
              <tbody>
                {details.map((item, index) => {
                  // console.log(item)
                  return (
                    <tr key={index}>
                      <td>{item.brand}</td>
                      <td>{item.type}</td>
                      <td>{item.color}</td>
                      <td>{item.size}</td>
                      <td>{item.quantity}</td>
                      <td>{item.status}</td>
                      {["ongoing", "pending"].includes(
                        details[0].transaction_status
                      ) && (
                        <td className="d-flex flex-row justify-content-center gap-2">
                          {item.status === "ongoing" && (
                            <>
                              <button
                                className="btn btn-success btn-sm"
                                data-bs-toggle="modal"
                                data-bs-target={`#modal${item.order_id}3`}
                              >
                                <i className="bi bi-check"></i>
                              </button>
                              <VerifyModal
                                title={"finish"}
                                orderID={item.order_id}
                                status={status}
                                setDone={setDone}
                                orderStatus={3}
                                orderQty={item.quantity}
                              />
                            </>
                          )}

                          {item.status === "finished" && (
                            <>
                              <button
                                className="btn btn-danger btn-sm"
                                data-bs-toggle="modal"
                                data-bs-target={`#modal${item.order_id}2`}
                              >
                                Set to ongoing
                              </button>
                              <VerifyModal
                                title={"set to ongoing"}
                                orderID={item.order_id}
                                status={status}
                                setDone={setDone}
                                orderStatus={2}
                                orderQty={item.quantity}
                              />
                            </>
                          )}

                          {item.status === "ongoing" && (
                            <>
                              <button
                                className="btn btn-danger btn-sm"
                                data-bs-toggle="modal"
                                data-bs-target={`#modal${item.order_id}4`}
                              >
                                <i className="bi bi-x"></i>
                              </button>
                              <VerifyModal
                                title={"cancel"}
                                orderID={item.order_id}
                                status={status}
                                setDone={setDone}
                                orderStatus={4}
                                orderQty={item.quantity}
                              />
                            </>
                          )}

                          {item.status === "voided" && (
                            <>
                              <button
                                className="btn btn-success btn-sm"
                                data-bs-toggle="modal"
                                data-bs-target={`#modal${item.order_id}2`}
                              >
                                Reorder
                              </button>
                              <VerifyModal
                                title={"reorder"}
                                orderID={item.order_id}
                                status={status}
                                setDone={setDone}
                                orderStatus={2}
                                orderQty={item.quantity}
                              />
                            </>
                          )}
                        </td>
                      )}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="fw-bold fs-3 text-center">Transaction Done</div>

          <div className="d-flex gap-2">
            <button
              className="btn btn-success"
              data-bs-toggle="modal"
              data-bs-target={`#verifyTransaction${details[0].transaction_id}`}
              disabled={!allOrderDone}
            >
              <i className="bi bi-check"></i>
            </button>
            <VerifyTransaction
              transactionID={details[0].transaction_id}
              finishOrder={finishOrder}
              customerID={details[0].customer_id}
            />
            <button
              className="btn btn-danger"
              data-bs-toggle="modal"
              data-bs-target={`#cancelTransaction${details[0].transaction_id}`}
              onClick={() => {}}
            >
              <i className="bi bi-x"></i>
            </button>
            <CancelTransaction
              transactionID={details[0].transaction_id}
              phonenumber={details[0].phonenumber}
              firstname={details[0].firstname}
              lastname={details[0].lastname}
              cancelTransaction={cancelTransaction}
            />
          </div>
        </>
      ) : (
        <div className="alert alert-info">No customer details found.</div>
      )}
    </div>
  );
};

export default CustomerDetails;
