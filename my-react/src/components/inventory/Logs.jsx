import React, { useEffect } from "react";
import $ from "jquery";
import "datatables.net-bs5";

const Logs = ({ logs }) => {

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Logs</h2>
      <div className="table-responsive">
        <table id="logsTable" className="table">
          <thead className="">
            <tr>
              <th>Detail</th>
              <th>Inventory ID</th>
              <th>Old value</th>
              <th>New value</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(logs) &&
              logs.map((log) => {
                const dateObj = new Date(log.timestamp * 1000);
                const date = dateObj.toLocaleDateString();
                const time = dateObj.toLocaleTimeString();
                return (
                  <tr key={log.id}>
                    <td>{log.detail}</td>
                    <td>{log.inventory_id}</td>
                    <td>{log.old_value}</td>
                    <td>{log.new_value}</td>
                    <td>{date} </td>
                    <td>{time} </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Logs;
