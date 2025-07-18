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
      <label htmlFor="inputDeadline">Deadline</label>
      <input
        id="inputDeadline"
        type="date"
        value={transaction.deadline}
        onChange={(e) => {
          changeDate(e);
        }}
      />

      <label htmlFor="textNote">Note</label>
      <textarea
        id="textNote"
        type="note"
        value={transaction.note}
        onChange={(e) =>
          setTransaction((prev) => ({ ...prev, note: e.target.value }))
        }
      />
    </>
  );
};

export default TransactionForm;
