const CancelTransaction = ({
  transactionID,
  cancelTransaction,
  phonenumber,
  firstname,
  lastname,
}) => {
  return (
    <div
      class="modal fade"
      id={`cancelTransaction${transactionID}`}
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby={`staticBackdropLabel`}
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div className="modal-body text-capitalize">
            cancel transaction order {transactionID} ?
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-danger"
              data-bs-dismiss="modal"
            >
              No
            </button>
            <button
              type="button"
              class="btn btn-primary"
              data-bs-dismiss="modal"
              onClick={() => {
                cancelTransaction(
                  transactionID,
                  phonenumber,
                  firstname,
                  lastname
                );
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

export default CancelTransaction;
