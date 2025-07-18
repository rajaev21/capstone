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
          <div>
            <label>First Name:</label>
            <input
              type="text"
              name="firstname"
              value={customerDetail.firstname}
              onChange={e => handleCustomerFormChange(e)}
            />
          </div>
          <div>
            <label>Last Name:</label>
            <input
              type="text"
              name="lastname"
              value={customerDetail.lastname}
              onChange={e => handleCustomerFormChange(e)}
            />
          </div>
          <div>
            <label>Phone Number:</label>
            <input
              type="number"
              name="phonenumber"
              value={customerDetail.phonenumber}
              onChange={e => handleCustomerFormChange(e)}
            />
          </div>
          <div>
            <label>Facebook:</label>
            <input
              type="text"
              name="facebook"
              value={customerDetail.facebook}
              onChange={e => handleCustomerFormChange(e)}
            />
          </div>
          <div>
            <label>Gmail:</label>
            <input
              type="email"
              name="gmail"
              value={customerDetail.gmail}
              onChange={e => handleCustomerFormChange(e)}
            />
          </div>
          <div>
            <label>Address:</label>
            <input
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
