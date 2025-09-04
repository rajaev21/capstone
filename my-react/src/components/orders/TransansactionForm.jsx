import React, { useEffect } from "react";

const TransactionForm = ({ transaction, setTransaction }) => {
  const changeDate = (e) => {
    const { value } = e.target;

    const unix = Math.floor(new Date(value).getTime() / 1000);
    const unixNow = Math.floor(new Date().getTime() / 1000);
    // + 83499
    console.log(unix, "and", unixNow);

    if (unixNow > unix) {
      alert("Please select a future date.");
      return;
    }
    setTransaction((prev) => ({
      ...prev,
      deadline: value,
    }));
  };

  return (
    <>
      <div className="fs-5 text-center">Transaction details</div>
      <div className="input-group input-group-sm mb-3">
        <span className="input-group-text">
          <i className="bi bi-calendar-check"></i>
        </span>
        <div className="form-floating">
          <input
            className="form-control"
            id="deadline"
            type="date"
            placeholder="deadline"
            value={transaction.deadline}
            onChange={(e) => {
              changeDate(e);
            }}
          />
          <label htmlFor="deadline">Deadline (required)</label>
        </div>
      </div>
      <div className="input-group input-group-sm mb-3">
        <span className="input-group-text">
          <i className="bi bi-alphabet"></i>
        </span>
        <div className="form-floating">
          <textarea
            className="form-control"
            id="design"
            type="text"
            placeholder="designName"
            value={transaction.design}
            onChange={(e) =>
              setTransaction((prev) => ({ ...prev, design: e.target.value }))
            }
          />
          <label htmlFor="design">Design name</label>
        </div>
      </div>
      <div className="input-group input-group-sm mb-3">
        <span className="input-group-text">
          <i className="bi bi-pen"></i>
        </span>
        <div className="form-floating">
          <textarea
            className="form-control"
            id="textNote"
            type="note"
            placeholder="note"
            value={transaction.note}
            style={{ height: "100px" }}
            onChange={(e) =>
              setTransaction((prev) => ({ ...prev, note: e.target.value }))
            }
          />
          <label htmlFor="textNote">Note</label>
        </div>
      </div>
    </>
  );
};

export default TransactionForm;
