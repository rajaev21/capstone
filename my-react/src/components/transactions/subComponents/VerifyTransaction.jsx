const VerifyTransaction = ({ transactionID, finishOrder, customerID }) => {
  return (
    <div
      className="modal fade"
      id={`verifyTransaction${transactionID}`}
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby={`staticBackdropLabel${transactionID}`}
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <div className="modal-title fs-4">Finish transaction order?</div>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            Clicking the "Yes" button will send an SMS notification to
            the registered customer's phone number, informing them that their
            order is ready for pickup.
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-danger"
              data-bs-dismiss="modal"
            >
              No
            </button>
            <button
              type="button"
              className="btn btn-primary"
              data-bs-dismiss="modal"
              onClick={() => {
                finishOrder(transactionID, customerID);
              }}
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyTransaction;
