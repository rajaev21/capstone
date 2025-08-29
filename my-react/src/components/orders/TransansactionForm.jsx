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
      <div className="input-group input-group-sm mb-3">
        <span className="input-group-text">
          <i class="bi bi-calendar-check"></i>
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
          <label htmlFor="deadline">Deadline</label>
        </div>
      </div>
      Note:
      <div className="input-group input-group-sm mb-3">
        <span className="input-group-text">
          <i class="bi bi-pen"></i>
        </span>
        <div className="form-floating">
          <textarea
          className="form-control"
          id="textNote"
          type="note"
          placeholder="note"
          value={transaction.note}
          style={{height : "100px"}}
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
