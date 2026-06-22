import axios from "axios";

const DeleteSize = ({
  selected,
  brands,
  types,
  colors,
  sizes,
  fetchInventory,
  fetchSize,
}) => {
  const data = {};

  function deleteSize(selected, brands, types) {
    const brand = brands.find((item) => item.brand_name === selected.brand);
    const type = types.find((item) => item.type_name === selected.type);
    const color = colors.find((item) => item.color_name === selected.color);
    const size = sizes.find((item) => item.size_name === selected.size);

    data.action = "deleteSize";
    data.brand = brand;
    data.type = type;
    data.color = color;
    data.size = size;

    console.log(data);
    axios
      .post("https://allsite.infy.click/backend/my-react.php", data, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        console.log(res.data)
        reset(); 
      })
      .catch((err) => console.error("Error adding option:", err));
  }

  function reset() {
    fetchInventory();
    fetchSize();
  }

  return (
    <>
      <div
        className="modal fade"
        id="deleteSize"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="deleteSizeLabel"
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
              <h1 className="modal-title fs-5 me-auto " id="deleteSizeLabel">
                Delete size {selected.size} ?
              </h1>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={() => deleteSize(selected, brands, types)}
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

export default DeleteSize;
