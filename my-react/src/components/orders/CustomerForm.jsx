import React from "react";

const CustomerForm = ({
  customerDetail,
  setCustomerDetail,
}) => {
  const handleCustomerFormChange = (e) => {
    const { name, value } = e.target;
    setCustomerDetail((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      {customerDetail && (
        <div className="p-1">
          <div className="fs-5 text-center">Customer details</div>
          <div className="input-group input-group-sm mb-3">
            <span className="input-group-text">
              <i className="bi bi-person"></i>
            </span>
            <div className="form-floating">
              <input
                className="form-control"
                type="text"
                name="firstname"
                id="firstname"
                placeholder="Enter Firstname"
                value={customerDetail.firstname}
                onChange={(e) => handleCustomerFormChange(e)}
              />
              <label htmlFor="firstname"> Firstname (required)</label>
            </div>
          </div>
          <div className="input-group input-group-sm mb-3">
            <span className="input-group-text">
              <i className="bi bi-person"></i>
            </span>
            <div className="form-floating">
              <input
                className="form-control"
                type="text"
                name="lastname"
                id="lastname"
                placeholder="Enter Lastname"
                value={customerDetail.lastname}
                onChange={(e) => handleCustomerFormChange(e)}
              />
              <label htmlFor="lastname"> Lastname</label>
            </div>
          </div>
          <div className="input-group input-group-sm mb-3">
            <span className="input-group-text">
              <i className="bi bi-telephone"></i>
            </span>
            <div className="form-floating">
              <input
                className="form-control"
                type="number"
                name="phonenumber"
                id="phonenumber"
                placeholder="phonenumber"
                value={customerDetail.phonenumber}
                onChange={(e) => handleCustomerFormChange(e)}
                onKeyDown={(e) => {
                  if (e.key === "-" || e.key === "+") {
                    e.preventDefault();
                  }
                }}
              />
              <label htmlFor="phonenumber"> Phonenumber (required)</label>
            </div>
          </div>
          <div className="input-group input-group-sm mb-3">
            <span className="input-group-text">
              <i className="bi bi-geo-alt"></i>
            </span>
            <div className="form-floating">
              <input
                className="form-control"
                type="text"
                name="address"
                id="address"
                placeholder="Enter Firstname"
                value={customerDetail.address}
                onChange={(e) => handleCustomerFormChange(e)}
              />
              <label htmlFor="address"> Address</label>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CustomerForm;
