import axios from "axios";

const DeleteColor = ({
  selected,
  brands,
  types,
  colors,
  fetchInventory,
  fetchColor,
  setSelected,
}) => {
  const data = {};

  function deleteColor(selected, brands, types, colors) {
    const brand =
      Array.isArray(brands) &&
      brands.find((item) => item.brand_name === selected.brand);
    const type =
      Array.isArray(types) &&
      types.find((item) => item.type_name === selected.type);
    const color =
      Array.isArray(colors) &&
      colors.find((item) => item.color_name === selected.color);

    data.action = "deleteColor";
    data.brand = brand;
    data.type = type;
    data.color = color;

    console.log(data);
    axios
      .post("https://allsite.infy.click/backend/my-react.php", data, {
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
    fetchColor();
    setSelected((prev) => ({ ...prev, color: "" }));
  }

  return (
    <>
      <div
        className="modal fade"
        id="deleteColor"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="deleteColorLabel"
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
                id="deleteColorLabel"
              >
                delete color {selected.color} ?
              </h1>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={() => deleteColor(selected, brands, types, colors)}
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

export default DeleteColor;
