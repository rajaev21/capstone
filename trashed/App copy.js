import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "datatables.net-bs5";
import "bootstrap-icons/font/bootstrap-icons.css";

import LoginForm from "../LoginForm";
import RegisterForm from "../RegisterForm";
import WelcomePage from "../transactions/WelcomePage";
import Order from "../orders/Order";
import Layout from "../Layout";
import Inventory from "../inventory/Inventory";
import Dashboard from "../dashboard/Dashboard";
import History from "../history/History";

function App() {
  const [inventory, setInventory] = useState({});
  const [allInventory, setAllInventory] = useState({});
  const [logs, setLogs] = useState({});
  const [brand, setBrand] = useState({});
  const [color, setColor] = useState({});
  const [size, setSize] = useState({});
  const [type, setType] = useState({});
  const [inventoryCheck, setInventoryCheck] = useState({});
  const [transaction, setTransaction] = useState({});
  const [placement, setPlacement] = useState({});
  const [status, setStatus] = useState({});

  useEffect(() => {
    if (window.location.pathname === "/") {
      window.location.replace("/login");
    }
  }, []);

  useEffect(() => {
    fetchStatus();
    setStatus();
    fetchInventory();
    fetchAllInventory();
    fetchLogs();
    fetchBrand();
    fetchColor();
    fetchSize();
    fetchType();
    fetchTransaction();
    fetchPlacement();
  }, []);

  const fetchStatus = () => {
    axios
      .get("http://localhost/capstone/submit.php?action=getStatus")
      .then((response) => {
        setStatus(response.data);
      })
      .catch((error) => {
        console.error("There was na error", error);
      });
  };
  const fetchTransaction = () => {
    axios
      .get("http://localhost/capstone/submit.php?action=getTransaction")
      .then((response) => {
        setTransaction(response.data);
      })
      .catch((error) => {
        console.error("There was na error", error);
      });
  };

  const fetchLogs = () => {
    axios
      .get("http://localhost/capstone/submit.php?action=getLogs")
      .then((response) => {
        setLogs(response.data);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

  const fetchInventory = () => {
    axios
      .get("http://localhost/capstone/submit.php?action=getInventory")
      .then((response) => {
        setInventory(response.data);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

  const fetchAllInventory = () => {
    axios
      .get("http://localhost/capstone/submit.php?action=getAllInventory")
      .then((response) => {
        setAllInventory(response.data);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

  const fetchInventoryCheck = () => {
    axios
      .get("http://localhost/capstone/submit.php?action=getInventoryCheck")
      .then((response) => {
        setInventoryCheck(response.data);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

  const fetchBrand = () => {
    axios
      .get("http://localhost/capstone/submit.php?action=getBrand")
      .then((response) => {
        setBrand(response.data);
      });
  };
  const fetchColor = () => {
    axios
      .get("http://localhost/capstone/submit.php?action=getColor")
      .then((response) => {
        setColor(response.data);
      });
  };
  const fetchSize = () => {
    axios
      .get("http://localhost/capstone/submit.php?action=getSize")
      .then((response) => {
        setSize(response.data);
      });
  };
  const fetchType = () => {
    axios
      .get("http://localhost/capstone/submit.php?action=getType")
      .then((response) => {
        setType(response.data);
      });
  };
  const fetchPlacement = () => {
    axios
      .get("http://localhost/capstone/submit.php?action=getPlacement")
      .then((response) => {
        setPlacement(response.data);
      });
  };
  return (
    <>
      {Array.isArray(inventory) ? (
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />

          <Route
            path="/transaction"
            element={
              <Layout inventory={inventory} >
                <WelcomePage
                  status={status}
                  transaction={transaction}
                  setTransaction={setTransaction}
                  fetchTransaction={fetchTransaction}
                  inventory={inventory}
                  brand={brand}
                  color={color}
                />
              </Layout>
            }
          />

          <Route
            path="/order"
            element={
              <Layout inventory={inventory} >
                <Order
                  brand={brand}
                  type={type}
                  color={color}
                  size={size}
                  inventory={inventory}
                  inventoryCheck={inventoryCheck}
                  setInventoryCheck={setInventoryCheck}
                  fetchInventoryCheck={fetchInventoryCheck}
                  fetchInventory={fetchInventory}
                  fetchLogs={fetchLogs}
                  placement={placement}
                  setPlacement={setPlacement}
                />
              </Layout>
            }
          />

          <Route
            path="/inventory"
            element={
              <Layout inventory={inventory} >
                <Inventory
                  inventory={allInventory}
                  brand={brand}
                  type={type}
                  color={color}
                  size={size}
                  fetchInventory={fetchAllInventory}
                  fetchBrand={fetchBrand}
                  fetchType={fetchType}
                  fetchColor={fetchColor}
                  fetchSize={fetchSize}
                />
              </Layout>
            }
          />
          <Route
            path="/dashboard"
            element={
              <Layout inventory={inventory} >
                <Dashboard inventory={inventory} color={color} logs={logs} />
              </Layout>
            }
          />
          <Route
            path="/history"
            element={
              <Layout inventory={inventory} fetchInventory={fetchInventory} >
                <History
                  inventory={allInventory}
                  logs={logs}
                  fetchInventory={fetchInventory}
                  fetchLogs={fetchLogs}
                />
              </Layout>
            }
          />
        </Routes>
      ) : (
        "No Data Acquired"
      )}
    </>
  );
}

export default App;
