const VerifyModal = ({
  title,
  orderID,
  status,
  setDone,
  orderQty,
}) => {
  return (
    <div
      class="modal fade"
      id={`modal${orderID}${status}`}
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby={`staticBackdropLabel`}
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div className="modal-body text-capitalize">
            {title} order {orderID} ?
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
                setDone(orderID, status, orderQty, title);
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

export default VerifyModal;
