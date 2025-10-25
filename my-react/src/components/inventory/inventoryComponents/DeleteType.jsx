import axios from "axios";

const DeleteType = ({ selected }) => {
  const data = {};

  function deleteType(selected) {
    data.action = "deleteTable";
    data.selected = selected;

    console.log(data);
    axios
      .post("http://localhost/capstone/submit.php", data, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        console.log(res.data);
        // window.location.reload();
      })
      .catch((err) => console.error("Error adding option:", err));
  }

  // function reset() {
  //   fetchInventory();
  //   fetchType();
  //   closeCollapse();
  // }

  return (
    <>
      <div
        className="modal fade"
        id="deleteType"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="deleteTypeLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <h1
                className="modal-title fs-5 me-auto text-capitalize"
                id="deleteTypeLabel"
              >
                Delete Table?
              </h1>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary btn-fill"
                data-bs-dismiss="modal"
              >
                No
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={() => deleteType(selected)}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteType;
