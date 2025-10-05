import React from "react";

const DesignForm = ({designName, setDesignName}) => {
  return (
    <div>
      <label>
        Design Name:
        <input
          type="text"
          id="designName"
          value={designName}
          onChange={(e) => {
            setDesignName(e.target.value);
          }}
        />
      </label>
    </div>
  );
};

export default DesignForm;