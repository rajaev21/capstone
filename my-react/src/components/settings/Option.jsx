import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const Option = ({ option, setOption, name, fetch }) => {
  const capitalizedName =
    name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  const [optionID, optionName] = [`${name}_id`, `${name}_name`];
  const [search, setSearch] = useState("");
  const [pageCount, setPageCount] = useState(0);
  const role = localStorage.getItem("role");

  const filteredItems =
    Array.isArray(option) &&
    option.filter((item) =>
      Object.values(item).some((val) =>
        String(val).toLowerCase().includes(search.toLowerCase())
      )
    );

  const itemsPerPage = 5;
  const start = pageCount * itemsPerPage;
  const end = start + itemsPerPage;
  const currentItems = filteredItems.slice(start, end);
  const totalPage = Math.ceil(filteredItems.length / itemsPerPage);

  function addOption(e) {
    e.preventDefault();
    const value = e.target.optionName.value.trim().toLowerCase();
    const isDuplicate = option.find((item) => item[optionName] === value);
    if (isDuplicate) {
      alert(`${value} already existed`);
      return;
    }
    const data = {
      table: name,
      value: value,
      action: "insertOption",
    };
    if (value) {
      axios
        .post("http://localhost/capstone/submit.php", data, {
          headers: { "Content-Type": "application/json" },
        })
        .then((response) => {
          if (typeof response.data !== "number") {
            alert("Error in data");
            return;
          }
          alert("Item inserted");
          fetch();
        })
        .catch((error) => {
          console.error("There was an error adding the option!", error);
        });
      e.target.reset();
    }
  }

  function deleteItem(e, id) {
    e.preventDefault();
    const data = { id: id, table: name, action: "deleteOption" };
    axios
      .post("http://localhost/capstone/submit.php", data, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        if (response.data.message === "fk") {
          alert(
            "This option is being used in inventory. Item in inventory first!"
          );
        }
        fetch();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      <div className="d-flex justify-content-end mb-3">
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target={`#${name}`}
        >
          Add {capitalizedName}
        </button>
      </div>

      <div
        className="modal fade"
        id={name}
        tabIndex="-1"
        aria-labelledby="optionModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="optionModalLabel">
                Add New {capitalizedName}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={(e) => addOption(e)}>
                <div className="mb-3">
                  <label htmlFor="optionName" className="form-label">
                    {capitalizedName} name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="optionName"
                    name="optionName"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  {" "}
                  Save{" "}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <h6>
        Search:{" "}
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </h6>

      <table className="table table-striped table-bordered">
        <thead className="table-light">
          <tr>
            <td>ID</td>
            <td>Name</td>
            {role == 2 && role == 1 && <td>Action</td>}
          </tr>
        </thead>
        <tbody>
          {currentItems.length > 0 ? (
            currentItems.map((item, idx) => (
              <tr key={idx}>
                {Object.values(item).map((val, i) => (
                  <td key={i}>{val}</td>
                ))}

                {role == 2 && role == 1 && (
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={(e) => deleteItem(e, item[optionID])}
                    >
                      Delete
                    </button>
                  </td>
                )}
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={Object.keys(option[0] || {}).length}
                className="text-center"
              >
                No results found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <nav className="d-flex justify-content-center mt-3">
        <ul className="pagination">
          <li className="page-item">
            <button
              className="page-link"
              onClick={() => setPageCount(0)}
              disabled={pageCount === 0}
            >
              <span aria-hidden="true">&laquo;</span>
            </button>
          </li>

          <li className="page-item">
            <button
              className="page-link"
              onClick={() => setPageCount((prev) => prev - 1)}
              disabled={pageCount === 0}
            >
              Previous
            </button>
          </li>

          <li className="page-item">
            <button className="page-link">{pageCount + 1}</button>
          </li>

          <li className="page-item">
            <button
              className="page-link"
              onClick={() => setPageCount((prev) => prev + 1)}
              disabled={pageCount + 1 >= totalPage}
              style={{ width: "80px" }}
            >
              Next
            </button>
          </li>

          <li className="page-item">
            <button
              className="page-link"
              onClick={() => setPageCount(totalPage - 1)}
              disabled={pageCount === totalPage - 1}
            >
              <span aria-hidden="true">&raquo;</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Option;
