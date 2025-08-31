import React, { useState, useEffect, use } from "react";
import "datatables.net";
import InventoryTable from "./InventoryTable";
import Logs from "./Logs";

const History = ({ inventory, logs, fetchInventory, fetchLogs }) => {
  useEffect(() => {
    fetchInventory();
    fetchLogs();
  }, []);
  
  return (
    <div className="container">
      <Logs logs={logs} />

      <InventoryTable inventory={inventory} />
    </div>
  );
};

export default History;
