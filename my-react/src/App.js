import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "datatables.net-bs5";
import "bootstrap-icons/font/bootstrap-icons.css";

import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import WelcomePage from "./components/transactions/WelcomePage";
import Order from "./components/orders/Order";
import Layout from "./components/Layout";
import Inventory from "./components/inventory/Inventory";
import Dashboard from "./components/dashboard/Dashboard";
import History from "./components/history/History";

function App() {
  const [loading, setLoading] = useState(true);
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
  const [customers, setCustomers] = useState({});
  useEffect(() => {
    const currentPath = window.location.pathname;
    const paths = [
      "/login",
      "/register",
      "/transaction",
      "/order",
      "/inventory",
      "/dashboard",
      "/history",
    ];

    const isAllowed = paths.some((p) => currentPath.startsWith(p));

    if (!isAllowed) {
      window.location.replace("/login");
    }
  }, []);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const [
          statusRes,
          inventoryRes,
          allInventoryRes,
          logsRes,
          brandRes,
          colorRes,
          sizeRes,
          typeRes,
          transactionRes,
          placementRes,
          customersRes,
        ] = await Promise.all([
          axios.get("http://localhost/capstone/submit.php?action=getStatus"),
          axios.get("http://localhost/capstone/submit.php?action=getInventory"),
          axios.get(
            "http://localhost/capstone/submit.php?action=getAllInventory"
          ),
          axios.get("http://localhost/capstone/submit.php?action=getLogs"),
          axios.get("http://localhost/capstone/submit.php?action=getBrand"),
          axios.get("http://localhost/capstone/submit.php?action=getColor"),
          axios.get("http://localhost/capstone/submit.php?action=getSize"),
          axios.get("http://localhost/capstone/submit.php?action=getType"),
          axios.get(
            "http://localhost/capstone/submit.php?action=getTransaction"
          ),
          axios.get("http://localhost/capstone/submit.php?action=getPlacement"),
          axios.get("http://localhost/capstone/submit.php?action=getCustomers"),
        ]);

        setStatus(statusRes.data);
        setInventory(inventoryRes.data);
        setAllInventory(allInventoryRes.data);
        setLogs(logsRes.data);
        setBrand(brandRes.data);
        setColor(colorRes.data);
        setSize(sizeRes.data);
        setType(typeRes.data);
        setTransaction(transactionRes.data);
        setPlacement(placementRes.data);
        setCustomers(customersRes.data);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching initial data:", error);
      }
    };

    fetchAllData();
  }, []);

  // const getCustomers = () => {
  //   axios
  //     .get("http://localhost/capstone/submit.php?action=getCustomers")
  //     .then((response) => {
  //       setCustomers(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("There was na error", error);
  //     });
  // };
  // const fetchStatus = () => {
  //   axios
  //     .get("http://localhost/capstone/submit.php?action=getStatus")
  //     .then((response) => {
  //       setStatus(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("There was na error", error);
  //     });
  // };
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
      {loading ? (
        <div className="container mt-5">
          <div className="d-flex align-items-center h3">
            <strong>Loading...</strong>
            <div
              className="spinner-border ms-auto"
              role="status"
              aria-hidden="true"
            ></div>
          </div>
        </div>
      ) : (
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route
            path="/register"
            element={
              <Layout inventory={inventory} setLoading={setLoading}>
                <RegisterForm />
              </Layout>
            }
          />

          <Route
            path="/transaction"
            element={
              <Layout inventory={inventory} setLoading={setLoading}>
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
              <Layout inventory={inventory} setLoading={setLoading}>
                <Order
                  inventory={inventory}
                  brand={brand}
                  type={type}
                  color={color}
                  size={size}
                  fetchInventory={fetchInventory}
                  placement={placement}
                  customers={customers}
                />
              </Layout>
            }
          />

          <Route
            path="/inventory"
            element={
              <Layout inventory={inventory} setLoading={setLoading}>
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
              <Layout inventory={inventory} setLoading={setLoading}>
                <Dashboard inventory={inventory} color={color} logs={logs} />
              </Layout>
            }
          />
          <Route
            path="/history"
            element={
              <Layout inventory={inventory} fetchInventory={fetchInventory}>
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
      )}
    </>
  );
}

export default App;
