import { useEffect, useState } from "react";
import axios, { all } from "axios";
import VerifyModal from "./subComponents/VerifyModal";
import VerifyTransaction from "./subComponents/VerifyTransaction";
import AddOrder from "./subComponents/AddOrder";
import CancelTransaction from "./subComponents/CancelTransaction";
import Reorder from "./subComponents/Reorder";
import { generatePDF } from "../pdf";

const CustomerDetails = ({
  id,
  orderStatus,
  inventory,
  brand,
  color,
  fetchTransaction,
}) => {
  const [details, setDetails] = useState({});
  const [allOrderDone, setAllOrderDone] = useState(false);
  const [isReorder, setIsReorder] = useState(false);
  const [deadline, setDeadline] = useState("");
  const [selectedTotal, setSelectedTotal] = useState("");
  const [selectedInventoryID, setSelectedInventoryID] = useState("");
  const data = {};
  useEffect(() => {
    fetchCustomerDetails(id);
  }, [id]);

  const fetchCustomerDetails = () => {
    axios
      .get(
        `http://localhost/capstone/submit.php?action=getCustomerDetails&id=${id}`
      )
      .then((response) => {
        // console.log(response.data);
        setDetails(response.data);
        setDeadline(response.data[0].deadline);
        if (response.data) {
          const data = response.data;
          setAllOrderDone(
            data.every((item) =>
              ["finished", "voided"].includes(item.orderStatus)
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
    data.orderStatus = orderStatus;
    data.title = title;
    data.transactionID = details[0].transaction_id;
    data.inventoryID = selectedInventoryID;
    data.total = selectedTotal;
    if (title === "cancel" || title == "reorder") {
      data.qty = orderQty;
    }
    console.log(data);
    axios
      .post("http://localhost/capstone/submit.php", data, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        console.log(res.data);
        window.location.reload();
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

  function cancelTransaction() {
    data.action = "cancelTransaction";
    data.transactionID = details[0].transaction_id;
    data.phonenumber = details[0].phonenumber;
    data.fullname = details[0].fullname.trim();
    data.discount = details[0].discount;
    console.log(data);
    axios
      .post("http://localhost/capstone/submit.php", data, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        console.log(res.data);
        window.location.reload();
      });
  }

  function validateDeadline() {
    const unix = Math.floor(new Date(deadline).getTime() / 1000);
    const unixNow = Math.floor(new Date().getTime() / 1000);

    if (unixNow > unix + 84399) {
      alert("Select future date");
      return;
    }

    data.deadline = deadline;
    data.isReorder = isReorder;
    data.action = "extendDeadline";
    data.deadline = unix;
    data.transactionID = id;
    if (isReorder) {
      data.designName = details[0].$designName;
      data.note = details[0].note;
      data.printPrice = details[0].printPrice;
    }
    if (!isReorder) {
      data.deadlineExtension = "deadlineExtension";
    }
    console.log(data);
    axios
      .post("http://localhost/capstone/submit.php", data, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        if (res.data) {
          if (typeof res.data === "string") {
            alert(res.data);
          }
          console.log(res.data);
          window.location.reload();
        }
      });
  }

  // console.log(details);

  return (
    <div className="container mb-4">
      {details && (
        <button
          className="btn btn-primary"
          onClick={() => generatePDF("card-pdf", details[0].transaction_id)}
        >
          Generate Card PDF
        </button>
      )}
      <div className="mx-3" id="card-pdf">
        {Array.isArray(details) && details.length > 0 ? (
          <>
            <div className="card my-4">
              <div className="card-body">
                <span>Transaction : {details[0].transaction_id} </span>
                {["ongoing", "pending"].includes(
                  details[0].transactionStatus
                ) && (
                  <div className="d-grid gap-2">
                    <button
                      className="btn btn-success"
                      data-bs-toggle="modal"
                      data-bs-target={`#reorder${details[0].transaction_id}`}
                      onClick={() => setIsReorder(false)}
                    >
                      Extend deadline <i className="bi bi-calendar"></i>
                    </button>
                    <Reorder
                      title={"extend"}
                      details={details}
                      validateDeadline={validateDeadline}
                      deadline={deadline}
                      setDeadline={setDeadline}
                      setIsReorder={setIsReorder}
                    />
                  </div>
                )}

                <h5 className="card-title text-capitalize text-center">
                  {details[0].fullname.trim()
                    ? details[0].fullname
                    : "quick order"}
                </h5>
                <div className=" row row-cols-2">
                  <p className="card-text mb-1 col">
                    <strong>Phone:</strong> {details[0].phonenumber}
                  </p>
                  <p className="card-text mb-1 col">
                    <strong>Address:</strong> {details[0].address}
                  </p>
                  <p className="card-text mb-1 col">
                    <strong>Note:</strong> {details[0].note}
                  </p>
                  <p className="card-text mb-1 col">
                    <strong>Deadline:</strong> {details[0].deadline}
                  </p>
                  <p className="card-text mb-1 col">
                    <strong>Design:</strong> {details[0].designName}
                  </p>
                </div>
                <hr />
                <div className="d-flex">
                  Print :
                  <span className="ms-auto">{details[0].printPrice}</span>
                </div>
                {details.map((item, index) => {
                  if (
                    ["ongoing", "pending", "finished"].includes(
                      item.orderStatus
                    )
                  ) {
                    return (
                      <div className="d-flex">
                        Order ID {item.orderID}
                        <span className="ms-auto">{item.total}</span>
                      </div>
                    );
                  }
                })}
                <hr />
                <div className="d-flex">
                  Subtotal :
                  <span className="ms-auto">{details[0].subTotal}</span>
                </div>
                <div className="d-flex">
                  Discount :
                  <span className="ms-auto">{details[0].discount}</span>
                </div>
                <hr />
                <div className="d-flex">
                  Grand total :
                  <span className="ms-auto">{details[0].grand_total}</span>
                </div>
              </div>
            </div>
            <h5>
              Orders
              {["ongoing", "pending"].includes(
                details[0].transactionStatus
              ) && (
                <button
                  className="btn btn-transparent no-print"
                  data-bs-toggle="modal"
                  data-bs-target="#addOrder"
                >
                  <i className="bi bi-plus-circle"></i>
                </button>
              )}
            </h5>
            <AddOrder
              inventory={inventory}
              brand={brand}
              color={color}
              transactionID={details[0].transaction_id}
              printPrice={details[0].printPrice}
              design={details[0].designName}
            />
            {/* modal start */}

            <div className="table-responsive">
              <table className="table table-bordered table-striped table-sm">
                <thead className="table-light">
                  <tr>
                    <th>ID</th>
                    <th>Brand</th>
                    <th>Type</th>
                    <th>Color</th>
                    <th>Size</th>
                    <th>QTY</th>
                    <th>Status</th>
                    {["ongoing", "pending"].includes(
                      details[0].transactionStatus
                    ) && <th>Action</th>}
                  </tr>
                </thead>
                <tbody>
                  {details.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{item.orderID}</td>
                        <td>{item.brand}</td>
                        <td>{item.type}</td>
                        <td>{item.color}</td>
                        <td>{item.size}</td>
                        <td>{item.quantity}</td>
                        <td>{item.orderStatus}</td>
                        {["ongoing", "pending"].includes(
                          details[0].transactionStatus
                        ) && (
                          <td className="d-flex flex-row justify-content-center gap-2">
                            {["pending", "ongoing"].includes(
                              item.orderStatus
                            ) && (
                              <>
                                <button
                                  className="btn btn-success btn-sm"
                                  data-bs-toggle="modal"
                                  data-bs-target={`#modal${item.orderID}3`}
                                  onClick={() => {
                                    setSelectedInventoryID(item.inventoryID);
                                    setSelectedTotal(item.total);
                                  }}
                                >
                                  <i className="bi bi-check"></i>
                                </button>
                                <VerifyModal
                                  title={"finish"}
                                  orderID={item.orderID}
                                  setDone={setDone}
                                  status={3}
                                  orderQty={item.quantity}
                                />
                                <>
                                  <button
                                    className="btn btn-danger btn-sm"
                                    data-bs-toggle="modal"
                                    data-bs-target={`#modal${item.orderID}4`}
                                    onClick={() => {
                                      setSelectedInventoryID(item.inventoryID);
                                      setSelectedTotal(item.total);
                                    }}
                                  >
                                    <i className="bi bi-x"></i>
                                  </button>
                                  <VerifyModal
                                    title={"cancel"}
                                    orderID={item.orderID}
                                    orderStatus={orderStatus}
                                    setDone={setDone}
                                    status={4}
                                    orderQty={item.quantity}
                                  />
                                </>
                              </>
                            )}

                            {item.orderStatus === "finished" && (
                              <>
                                <button
                                  className="btn btn-danger btn-sm"
                                  data-bs-toggle="modal"
                                  data-bs-target={`#modal${item.orderID}2`}
                                  onClick={() => {
                                    setSelectedInventoryID(item.inventoryID);
                                    setSelectedTotal(item.total);
                                  }}
                                >
                                  Set to ongoing
                                </button>
                                <VerifyModal
                                  title={"set to ongoing"}
                                  orderID={item.orderID}
                                  setDone={setDone}
                                  status={2}
                                  orderQty={item.quantity}
                                />
                              </>
                            )}

                            {item.orderStatus === "voided" && (
                              <>
                                <button
                                  className="btn btn-success btn-sm"
                                  data-bs-toggle="modal"
                                  data-bs-target={`#modal${item.orderID}2`}
                                  onClick={() => {
                                    setSelectedInventoryID(item.inventoryID);
                                    setSelectedTotal(item.total);
                                  }}
                                >
                                  Reorder
                                </button>
                                <VerifyModal
                                  title={"reorder"}
                                  orderID={item.orderID}
                                  setDone={setDone}
                                  status={2}
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

            <div className="fw-bold fs-3 text-center">
              Transaction {details[0].transactionStatus}
            </div>

            {["pending", "ongoing"].includes(details[0].transactionStatus) && (
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
                  cancelTransaction={cancelTransaction}
                  transactionID={details[0].transaction_id}
                />
              </div>
            )}

            {["expired", "voided"].includes(details[0].transactionStatus) && (
              <div className="d-grid gap-2">
                <button
                  className="btn btn-success"
                  data-bs-toggle="modal"
                  data-bs-target={`#reorder${details[0].transaction_id}`}
                  onClick={() => setIsReorder(true)}
                >
                  Reorder <i className="bi bi-check"></i>
                </button>
                <Reorder
                  orderStatus={details[0].transactionStatus}
                  title={"reorder"}
                  details={details}
                  validateDeadline={validateDeadline}
                  deadline={deadline}
                  setDeadline={setDeadline}
                  setIsReorder={setIsReorder}
                />
              </div>
            )}
          </>
        ) : (
          <div className="alert alert-info">No customer details found.</div>
        )}
      </div>
    </div>
  );
};

export default CustomerDetails;
