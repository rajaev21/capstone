import React, { useEffect, useState } from "react";
import $ from "jquery";

const SettingsTable = () => {
  const [settings, setSettings] = useState({});

  useEffect(() => {
    const getSettings = localStorage.getItem("settings");
    if (getSettings) {
      setSettings(getSettings);
      const table = $("#myTable").DataTable({});
    }
  }, [settings]);

  return (
    <>
      {settings.leng ? (<div className="table-responsive">
        <table
          id="myTable"
          className="table table-striped table-bordered table-hover"
        >
          <thead className="">
            <tr>
              <th>Brand</th>
              <th>Type</th>
              <th>Color</th>
              <th>Size</th>
              <th>Qty</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries}
          </tbody>
        </table>
      </div>) : ( <div className="p">No Data Available</div> )}
    </>
  );
};

export default SettingsTable;
