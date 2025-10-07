import axios from "axios";

const DeleteBrand = ({
  selected,
  brands,
  fetchInventory,
  fetchBrand,
  setSelected,
}) => {
  const data = {};

  function deleteBrand(selected, brands) {
    const brandobj = brands.find((item) => selected === item.brand_name);
    data.action = "deleteBrand";
    data.id = brandobj.brand_id;
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
    fetchBrand();
    setSelected({});
  }

  return (
    <>
      <div
        className="modal fade"
        id="deleteBrand"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="deleteBrandLabel"
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
                onClick={() => reset()}
              ></button>
            </div>
            <div className="modal-footer">
              <h1
                className="modal-title fs-5 me-auto text-capitalize"
                id="deleteBrandLabel"
              >
                delete brand {selected} ?
              </h1>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => deleteBrand(selected, brands)}
                data-bs-dismiss="modal"
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

export default DeleteBrand;
