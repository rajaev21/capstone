import React, { useState, useEffect, use } from "react";
import "datatables.net";
import $ from "jquery";
import axios from "axios";
import InventoryTable from "./InventoryTable";
import InventoryModal from "./InventoryModal";
import Logs from "./Logs";

const Inventory = ({
  inventory,
  logs,
  setLogs,
  brand,
  type,
  color,
  size,
  fetchInventory,
  fetchLogs,
  fetchInventoryCheck,
}) => {
  const [form, setForm] = useState([]);
  const [Count, setCount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = { action: "submitInventory", form: form };
    axios
      .post("http://localhost/capstone/submit.php", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        alert("Data submitted successfully:");
        fetchInventory();
        fetchLogs();
        fetchInventoryCheck();
        console.log("response", response.data);
        setForm([]);
      })
      .catch((error) => {
        console.error("There was an error submitting the data:", error);
      });
  };

  const addForm = () => {
    setForm((prev) => ({
      ...prev,
      [Count]: { brand: "", type: "", color: "", size: "", qty: "" },
    }));
    setCount((prev) => prev + 1);
  };

  const handleChange = (index, field, value) => {
    setForm((prev) => ({
      ...prev,
      [index]: {
        ...prev[index],
        [field]: value,
      },
    }));
  };
  const handleDelete = (key) => {
    setForm((prev) => {
      const { [key]: _, ...rest } = prev;
      return rest;
    });
    setCount((prev) => prev - 1);
  };

  const validateForm = (e) => {
    let readySubmit = true;
    let errorMessage = "";
    if (form.length === 0) {
      errorMessage = "Fill form properly";
      readySubmit = false;
    }
    for (const [key, value] of Object.entries(form)) {
      const { brand, type, color, size, qty } = value;
      if (
        qty === "" ||
        qty === "0" ||
        qty === 0 ||
        brand === "" ||
        type === "" ||
        color === "" ||
        size === ""
      ) {
        errorMessage = "Fill form properly";
        readySubmit = false;
        break;
      }
    }
    if (readySubmit) {
      handleSubmit(e);
    } else {
      alert(errorMessage);
    }
  };

  const handleClearItems = () => {
    setForm([]);
    setCount(0);
  };

  return (
    <div className="container">
      <h1>
        Inventory{" "}
        <button
          className="btn btn-transparent"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <i className="bi bi-plus-circle"></i>
        </button>
      </h1>
      <InventoryModal
        handleSubmit={handleSubmit}
        addForm={addForm}
        form={form}
        handleChange={handleChange}
        handleDelete={handleDelete}
        validateForm={validateForm}
        handleClearItems={handleClearItems}
        brand={brand}
        type={type}
        color={color}
        size={size}
      />

      <InventoryTable
        inventory={inventory}
        fetch={fetchInventory}
        fetchLogs={fetchLogs}
      />
      <Logs logs={logs} />
    </div>
  );
};

export default Inventory;
