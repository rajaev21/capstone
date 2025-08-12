import React from "react";

const CustomerForm = ({ customerDetail, setCustomerDetail }) => {
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
        <div>
          Firstname:
          <div className="input-group input-group-sm">
            <label className="input-group-text"><i class="bi bi-person"></i></label>
            <input
            className="form-control"
              type="text"
              name="firstname"
              value={customerDetail.firstname}
              onChange={e => handleCustomerFormChange(e)}
            />
          </div>
          Lastname:
          <div className="input-group input-group-sm">
            <label className="input-group-text"><i class="bi bi-person"></i></label>
            <input
            className="form-control"
              type="text"
              name="lastname"
              value={customerDetail.lastname}
              onChange={e => handleCustomerFormChange(e)}
            />
          </div>
          Phone number: 
          <div className="input-group input-group-sm">
            <label className="input-group-text"><i class="bi bi-telephone"></i></label>
            <input
            className="form-control"
              type="number"
              name="phonenumber"
              value={customerDetail.phonenumber}
              onChange={e => handleCustomerFormChange(e)}
            />
          </div >
          Facebook:
          <div className="input-group input-group-sm">
            <label className="input-group-text"><i class="bi bi-facebook"></i></label>
            <input
            className="form-control"
              type="text"
              name="facebook"
              value={customerDetail.facebook}
              onChange={e => handleCustomerFormChange(e)}
            />
          </div>
          Gmail:
          <div className="input-group input-group-sm">
            <label className="input-group-text"><i class="bi bi-google"></i></label>
            <input
            className="form-control"
              type="email"
              name="gmail"
              value={customerDetail.gmail}
              onChange={e => handleCustomerFormChange(e)}
            />
          </div>
          Address:
          <div className="input-group input-group-sm">
            <label className="input-group-text"><i class="bi bi-map"></i></label>
            <input
            className="form-control"
              type="text"
              name="address"
              value={customerDetail.address}
              onChange={e => handleCustomerFormChange(e)}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default CustomerForm;
