import axios from "axios";
import { useState, useEffect } from "react";
import PrintModal from "./PrintModal";

const Payments = ({ id, details }) => {
  const data = {};
  const [newPayment, setNewPayment] = useState("");
  const [payments, setPayments] = useState("");

  useEffect(() => {
    getPayments(id);
  }, [id]);

  const getPayments = (id) => {
    axios
      .get(`http://localhost/capstone/submit.php?action=getPayments&id=${id}`)
      .then((response) => {
        setPayments(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching customer details!", error);
      });
  };

  function deleteItem(id) {
    data.action = "deleteItem";
    data.id = id;
    axios
      .post("http://localhost/capstone/submit.php", data, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        console.log(response);
        window.location.reload();
      })
      .catch((error) => {
        console.error("There was an error submitting the order!", error);
      });
  }

  const addPayment = () => {
    if (newPayment === "0" || newPayment === "") {
      alert("payment cant be zero");
      return;
    }
    data.action = "addPayment";
    data.id = id;
    data.payment = newPayment;
    console.log(data);
    axios
      .post("http://localhost/capstone/submit.php", data, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        console.log(response.data);
        window.location.reload();
      })
      .catch((error) => {
        console.error("There was an error submitting the order!", error);
      });
  };
  console.log(payments);
  return (
    <>
      <div class="btn-group" role="group" aria-label="Basic example">
        <div class="input-group input-group-sm">
          <span class="input-group-text" id="basic-addon1">
            Add Payment :
          </span>
          <input
            type="number"
            min="0"
            class="form-control"
            value={newPayment}
            onChange={(e) => setNewPayment(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "-" || e.key === "+" || e.key === "e") {
                e.preventDefault();
              }
            }}
          />
          <button
            type="button"
            class="btn btn-primary"
            onClick={() => {
              addPayment();
            }}
          >
            Add
          </button>
        </div>
      </div>
      <button
        type="button"
        class="btn btn-primary btn-sm ms-3"
        data-bs-toggle="modal"
        data-bs-target="#printModal"
      >
        Print Receipt
      </button>
      <PrintModal details={details} payments={payments} />
      <div className="d-flex">
        Subtotal :<span className="ms-auto">{details[0].subTotal}</span>
      </div>
      {/* payments */}
      <hr />
      Payments :
      {payments &&
        payments.map((item) => {
          return (
            <div className="d-flex mb-2">
              {item.formatted_date}
              <span className="ms-auto">
                {item.payment}{" "}
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteItem(item.id)}
                >
                  <i className="bi bi-trash"></i>
                </button>
              </span>
            </div>
          );
        })}
      <hr />
      <div className="d-flex">
        Discount :<span className="ms-auto">{details[0].discount}</span>
      </div>
      <hr />
      <div className="d-flex">
        Grand total :
        <span className="ms-auto">
          {payments &&
            payments
              .map((item) => item.payment)
              .reduce(
                (x, y) => x - y,
                details[0].grand_total - details[0].discount
              )}
        </span>
      </div>
    </>
  );
};

export default Payments;
