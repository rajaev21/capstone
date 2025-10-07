import axios from "axios";

const DeleteType = ({
  selected,
  brands,
  types,
  fetchInventory,
  fetchType,
  closeCollapse,
}) => {
  const data = {};

  function deleteType(selected, brands, types) {
    const brand = brands.find((item) => item.brand_name === selected.brand);
    const type = types.find((item) => item.type_name === selected.type);

    data.action = "deleteType";
    data.brand = brand;
    data.type = type;

    console.log(data);
    axios
      .post("http://localhost/capstone/submit.php", data, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        console.log(res.data);
        reset();
      })
      .catch((err) => console.error("Error adding option:", err));
  }

  function reset() {
    fetchInventory();
    fetchType();
    closeCollapse();
  }

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
            <div className="modal-footer">
              <h1
                className="modal-title fs-5 me-auto text-capitalize"
                id="deleteTypeLabel"
              >
                delete type {selected.type} ?
              </h1>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={() => deleteType(selected, brands, types)}
              >
                Yes
              </button>
              <button
                type="button"
                className="btn btn-secondary btn-fill"
                data-bs-dismiss="modal"
              >
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteType;
