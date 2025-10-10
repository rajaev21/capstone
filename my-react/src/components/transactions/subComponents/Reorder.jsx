const Reorder = ({
  status,
  title,
  details,
  validateDeadline,
  deadline,
  setDeadline,
  setIsReorder,
}) => {
  return (
    <section>
      <div
        class="modal fade"
        id={`reorder${details[0].transaction_id}`}
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div className="modal-body text-capitalize">
              {title} transaction ID number {details[0].transaction_id} ?
            </div>
            <div className="modal-body">
              <div class="input-group d-flex mb-2">
                <span
                  class="input-group-text text-capitalize"
                  id="basic-addon1"
                >
                  select date :
                </span>
                <input
                  type="date"
                  class="form-control"
                  placeholder="Username"
                  value={deadline}
                  onChange={(e) => {
                    setDeadline(e.target.value);
                  }}
                />
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={() => {
                  setIsReorder(false);
                  setDeadline(deadline);
                }}
              >
                no
              </button>
              <button
                type="button"
                class="btn btn-success"
                data-bs-dismiss="modal"
                onClick={() => {
                  validateDeadline();
                  setIsReorder(false);
                  setDeadline(deadline);
                }}
              >
                yes
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reorder;
