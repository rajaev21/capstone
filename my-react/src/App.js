import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "datatables.net-bs5";
import "bootstrap-icons/font/bootstrap-icons.css";

import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import WelcomePage from "./components/home/WelcomePage";
import Inventory from "./components/inventory/Inventory";
import Settings from "./components/settings/Settings";
import Order from "./components/orders/Order";
import Layout from "./components/Layout";

function App() {
  const [inventory, setInventory] = useState({});
  const [logs, setLogs] = useState({});
  const [brand, setBrand] = useState({});
  const [color, setColor] = useState({});
  const [size, setSize] = useState({});
  const [type, setType] = useState({});
  const [inventoryCheck, setInventoryCheck] = useState({});
  const [transaction, setTransaction] = useState({});
  const [placement, setPlacement] = useState({});

  useEffect(() => {
    if (window.location.pathname === "/") {
      window.location.replace("/login");
    }
  }, []);

  useEffect(() => {
    fetchInventory();
    fetchLogs();
    fetchBrand();
    fetchColor();
    fetchSize();
    fetchType();
    fetchTransaction();
    fetchPlacement();
  }, []);

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
      {Array.isArray(transaction) ? (
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />

          <Route
            path="/home"
            element={
              <Layout>
                <WelcomePage
                  transaction={transaction}
                  setTransaction={setTransaction}
                  fetchTransaction={fetchTransaction}
                />
              </Layout>
            }
          />

          <Route
            path="/order"
            element={
              <Layout>
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
              <Layout>
                <Inventory
                  inventory={inventory}
                  logs={logs}
                  setLogs={setLogs}
                  brand={brand}
                  type={type}
                  color={color}
                  size={size}
                  fetchInventory={fetchInventory}
                  fetchLogs={fetchLogs}
                  fetchInventoryCheck={fetchInventoryCheck}
                />
              </Layout>
            }
          />

          <Route
            path="/settings"
            element={
              <Layout>
                <Settings
                  brand={brand}
                  setBrand={setBrand}
                  color={color}
                  setColor={setColor}
                  size={size}
                  setSize={setSize}
                  type={type}
                  setType={setType}
                  fetchColor={fetchColor}
                  fetchType={fetchType}
                  fetchSize={fetchSize}
                  fetchBrand={fetchBrand}
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
