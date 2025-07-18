import React from "react";

const Price = ({brand, type, color, size}) => {
    const [price, setPrice] = React.useState({
        brand: '',
        type: '',
        color: '',
        size: '',
        qty: ''
    });

    console.log(brand)

    const changeItem = () => {
        
    }

  return (
    <div className="container">
      <div className="d-flex justify-content-end mb-3">
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#addPrice"
        >
          Add Price
        </button>
      </div>

      <div
        className="modal fade"
        id="addPrice"
        tabIndex="-1"
        aria-labelledby="optionModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="optionModalLabel">
                Add New Prices
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                    <select name="brand">
                        <option value="">Select Brand</option>
                        {Array.isArray(brand) && brand.map(item => (
                            <option value={item.brand_id}>{item.brand_name}</option>
                        ))}
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">
                  {" "}
                  Save{" "}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="table">
        <table>
            <thead>
                <th></th>
            </thead>
        </table>
      </div>
    </div>
  );
};

export default Price;
