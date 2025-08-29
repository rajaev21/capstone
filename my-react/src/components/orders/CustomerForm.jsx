import React from "react";

const CustomerForm = ({ customerDetail, setCustomerDetail }) => {
  const handleCustomerFormChange = (e) => {
    const { name, value } = e.target;
    setCustomerDetail((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  console.log(customerDetail);
  return (
    <>
      {customerDetail && (
        <div className="p-1">
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
              <label htmlFor="firstname">Enter Firstname</label>
            </div>
          </div>
          <div className="input-group input-group-sm mb-3">
            <span className="input-group-text">
              <i class="bi bi-person"></i>
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
              <label htmlFor="lastname">Enter Lastname</label>
            </div>
          </div>
          <div className="input-group input-group-sm mb-3">
            <span className="input-group-text">
              <i class="bi bi-telephone"></i>
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
              <label htmlFor="phonenumber">Enter Phonenumber</label>
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
              <label htmlFor="address">Enter Address</label>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CustomerForm;
