import { printReceipt } from "../../pdf";

const PrintModal = ({ details, payments }) => {
  return (
    <div
      class="modal fade"
      id="printModal"
      tabindex="-1"
      aria-labelledby="printModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="printModalLabel">
              Print Receipt ?
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              class="btn btn-primary"
              data-bs-dismiss="modal"
              onClick={() => {
                printReceipt(details, payments);
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

export default PrintModal;
