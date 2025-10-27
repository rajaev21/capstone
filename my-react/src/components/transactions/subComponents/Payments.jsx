import axios from "axios";
import { useState, useEffect } from "react";
import PrintModal from "./PrintModal";

const Payments = ({ id, details }) => {
  const data = {};
  const [newPayment, setNewPayment] = useState("");
  const [payments, setPayments] = useState([]);
  const [pricePrint, setPricePrint] = useState(details[0].printPrice);
  const totalPricePrint =
    details.reduce((x, y) => x + y.quantity, 0) * pricePrint;
  const discount = details[0].discount;
  const [grandTotal, setGrandTotal] = useState();
  const isOngoing = ["ongoing", "pending"].includes(
    details[0].transactionStatus
  );

  console.log(details);

  useEffect(() => {
    const fetchPayments = async () => {
      await getPayments(id);
    };
    fetchPayments();
  }, [id]);

  useEffect(() => {
    const totalPayments = payments.reduce(
      (sum, p) => sum + Number(p.payment || 0),
      0
    );
    const total =
      totalPricePrint + details[0].subTotal - discount - totalPayments;
    setGrandTotal(total);
  }, [payments, totalPricePrint, discount, details]);

  const getPayments = async (id) => {
    try {
      const response = await axios.get(
        `http://localhost/capstone/submit.php?action=getPayments&id=${id}`
      );
      setPayments(response.data);
    } catch (error) {
      console.error("There was an error fetching customer details!", error);
    }
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
      console.log("payment cant be zero");
      return;
    }

    if (grandTotal - Number(newPayment) < 0) {
      console.log(`${Number(newPayment) - grandTotal} is less than 0`);
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

  return (
    <>
      <div
        className={`input-group input-group-sm mb-3 ${isOngoing ? "" : "d-none"}`}
      >
        <span className="input-group-text" id="basic-addon1">
          Add Payment :
        </span>
        <input
          type="number"
          min="0"
          className="form-control"
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
          className="btn btn-primary"
          onClick={() => {
            addPayment();
          }}
        >
          Add
        </button>
        <button
          type="button"
          className={`btn btn-primary btn-sm ms-3`}
          data-bs-toggle="modal"
          data-bs-target="#printModal"
        >
          Print Receipt
        </button>
      </div>
      <PrintModal details={details} payments={payments} />
      {/* payments */}
      <div className="d-flex">
        Print Price:<span className="ms-auto">{totalPricePrint}</span>
      </div>
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
                  className={`btn btn-danger btn-sm ${
                    isOngoing ? "" : "d-none"
                  }`}
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
        Grand Total :
        <span className="ms-auto">{details[0].subTotal + totalPricePrint}</span>
      </div>
      <div className="d-flex">
        Discount :<span className="ms-auto">{discount}</span>
      </div>
      <hr />
      <div className="d-flex">
        Balance :<span className="ms-auto">{grandTotal}</span>
      </div>
    </>
  );
};

export default Payments;
