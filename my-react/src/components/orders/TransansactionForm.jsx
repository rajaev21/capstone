import React, { useEffect } from "react";

const TransactionForm = ({ transaction, setTransaction }) => {
  const changeDate = (e) => {
    const { value } = e.target;

    const unix = Math.floor(new Date(value).getTime() / 1000);
    const unixNow = Math.floor(Date.now() / 1000);

    if (unix < unixNow) {
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
      Deadline: 
      <div className="input-group input-group-sm">
        <label className="input-group-text">
          <i class="bi bi-calendar-check"></i>
        </label>
        <input
          className="form-control"
          id="inputDeadline"
          type="date"
          value={transaction.deadline}
          onChange={(e) => {
            changeDate(e);
          }}
        />
      </div>
      Note:
      <div className="input-group input-group-sm">
        
        <label className="input-group-text"><i class="bi bi-pen"></i></label>
        <textarea
        className="form-control"
          id="textNote"
          type="note"
          value={transaction.note}
          onChange={(e) =>
            setTransaction((prev) => ({ ...prev, note: e.target.value }))
          }
        />
      </div>
    </>
  );
};

export default TransactionForm;
