import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import CustomerForm from "./CustomerForm";
import TransansactionForm from "./TransansactionForm";
import CurrentOrder from "./CurrentOrder";
import NewInventory from "./NewInventory";

const Order = ({
  inventory,
  brand,
  type,
  color,
  size,
  fetchInventory,
  placement,
  customers,
}) => {
  const [pricePrint, setPricePrint] = useState(0);
  const [buttonLoad, setButtonLoad] = useState(false);
  const [quickOrder, setQuickOrder] = useState(false);
  const [discount, setDiscount] = useState("");
  const [order, setOrder] = useState([]);
  const [customerDetail, setCustomerDetail] = useState({
    firstname: "",
    lastname: "",
    phonenumber: "",
    address: "",
  });
  const [transaction, setTransaction] = useState({
    user_id: "",
    deadline: "",
    note: "",
    placement: "",
    design: "",
  });

  useEffect(() => {
    const account = JSON.parse(localStorage.getItem("account"));
    if (account) {
      setTransaction((prev) => ({
        ...prev,
        user_id: account.user_id,
      }));
    }
    fetchInventory();
  }, []);

  const addOrder = () => {
    if (!quickOrder) {
      if (customerDetail.firstname === "") {
        alert("Please fill firstname.");
        return;
      }
      if (customerDetail.phonenumber === "") {
        alert("Please fill phone number.");
        return;
      }
      if (customerDetail.phonenumber.length != 11) {
        alert("Phone must be 11 digits");
        return;
      }
      if (transaction.user_id === "") {
        alert("Please fill transaction id.");
        return;
      }
    }
    if (transaction.deadline === "") {
      alert("Please set a deadline.");
      return;
    }
    if (order.length === 0) {
      alert("Please set orders.");
      return;
    }
    if (discount === "0") {
      setDiscount("");
      alert("discount is 0 please double check");
      return;
    }

    setButtonLoad(true);
    const data = {
      quickOrder,
      action: "submitOrder",
      transaction,
      customerDetail,
      order,
      discount,
      pricePrint
    };

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

  function reset() {
    setCustomerDetail({
      firstname: "",
      lastname: "",
      phonenumber: "",
      address: "",
    });
  }

  return (
    <>
      {placement.length > 0 ? (
        <div className="">
          <div className="row row-cols-2 gap-3 vh-100">
            <div className="card col-8">
              <NewInventory
                inventory={inventory}
                brand={brand}
                type={type}
                color={color}
                size={size}
                setOrder={setOrder}
                order={order}
              />
            </div>
            <div className="card col-3 ">
              <div className="d-flex justify-content-center flex-column">
                <div className="form-check my-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value={quickOrder}
                    id="checkDefault"
                    checked={quickOrder}
                    onClick={() => {
                      setQuickOrder((prev) => !prev);
                      reset();
                    }}
                  />
                  <label className="form-check-label" htmlFor="checkDefault">
                    Click here for quick order
                  </label>
                </div>
                <select
                  className="form-select"
                  onChange={(e) => {
                    const selected = customers[e.target.value];
                    setCustomerDetail({
                      firstname: selected.first_name,
                      lastname: selected.last_name,
                      phonenumber: selected.phone_number,
                      address: selected.address,
                    });
                  }}
                  disabled={quickOrder}
                >
                  <option defaultChecked>Select Customer</option>
                  {customers.map((item, i) => {
                    const fullname = `${item.first_name} ${item.last_name}`;
                    return (
                      <option key={i} value={i}>
                        {fullname}
                      </option>
                    );
                  })}
                </select>
              </div>
              <>
                <>
                  {!quickOrder && (
                    <CustomerForm
                      customerDetail={customerDetail}
                      setCustomerDetail={setCustomerDetail}
                    />
                  )}
                  <TransansactionForm
                    transaction={transaction}
                    setTransaction={setTransaction}
                  />
                  <CurrentOrder
                    inventory={inventory}
                    order={order}
                    setOrder={setOrder}
                    discount={discount}
                    setDiscount={setDiscount}
                    pricePrint={pricePrint}
                    setPricePrint={setPricePrint}
                  />
                  {order.length > 0 && (
                    <div className="d-flex my-3 justify-content-evenly">
                      {buttonLoad ? (
                        <Button variant="success" disabled>
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
                          className="btn btn-success"
                          onClick={() => addOrder()}
                          disabled={!transaction.deadline}
                        >
                          {" "}
                          Submit Order{" "}
                        </button>
                      )}

                      <button
                        className="btn btn-danger"
                        onClick={() => window.location.reload()}
                      >
                        {" "}
                        Cancel Order{" "}
                      </button>
                    </div>
                  )}
                </>
              </>
            </div>
          </div>
        </div>
      ) : (
        <div className="spinner-border m-5" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
    </>
  );
};

export default Order;
