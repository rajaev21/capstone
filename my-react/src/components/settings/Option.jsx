import React, { useState } from "react";
import axios from "axios";

const Option = ({ option, setOption, name, fetch }) => {
  const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
  const optionID = `${name}_id`;
  const optionName = `${name}_name`;
  const [search, setSearch] = useState("");
  const [pageCount, setPageCount] = useState(0);
  const role = localStorage.getItem("role");

  const filteredItems = Array.isArray(option)
    ? option.filter((item) =>
        Object.values(item).some((val) =>
          String(val).toLowerCase().includes(search.toLowerCase())
        )
      )
    : [];

  const itemsPerPage = 5;
  const start = pageCount * itemsPerPage;
  const end = start + itemsPerPage;
  const currentItems = filteredItems.slice(start, end);
  const totalPage = Math.ceil(filteredItems.length / itemsPerPage);

  const isAdmin = role === "1" || role === "2";

  function addOption(e) {
    e.preventDefault();
    const value = e.target.optionName.value.trim().toLowerCase();
    if (option.some((item) => item[optionName] === value)) {
      alert(`${value} already exists`);
      return;
    }

    if (value) {
      axios
        .post(
          "http://localhost/capstone/submit.php",
          { table: name, value, action: "insertOption" },
          { headers: { "Content-Type": "application/json" } }
        )
        .then((res) => {
          if (typeof res.data !== "number") {
            alert("Error in data");
            return;
          }
          alert("Item inserted");
          fetch();
        })
        .catch((err) => console.error("Error adding option:", err));

      e.target.reset();
    }
  }

  function deleteItem(id) {
    axios
      .post(
        "http://localhost/capstone/submit.php",
        { id, table: name, action: "deleteOption" },
        { headers: { "Content-Type": "application/json" } }
      )
      .then((res) => {
        if (res.data.message === "fk") {
          alert(
            "This option is being used in inventory. Remove it from inventory first!"
          );
        }
        fetch();
      })
      .catch((err) => console.error(err));
  }

  return (
    <div className="p-3">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="fw-bold">{capitalizedName}s</h4>
        {isAdmin && (
          <button
            className="btn btn-primary btn-sm shadow-sm d-flex align-items-center"
            data-bs-toggle="modal"
            data-bs-target={`#modal-${name}`}
          >
            <i class="bi bi-plus"></i> Add {capitalizedName}
          </button>
        )}
      </div>

      {/* Modal */}
      {isAdmin && (
        <div
          className="modal fade"
          id={`modal-${name}`}
          tabIndex="-1"
          aria-labelledby={`modalLabel-${name}`}
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content shadow">
              <form onSubmit={addOption}>
                <div className="modal-header border-0">
                  <h5 className="modal-title fw-bold">
                    Add New {capitalizedName}
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                  ></button>
                </div>
                <div className="modal-body">
                  <label className="form-label fw-semibold">
                    {capitalizedName} Name
                  </label>
                  <input
                    type="text"
                    name="optionName"
                    className="form-control"
                    autoFocus
                    required
                  />
                </div>
                <div className="modal-footer border-0">
                  <button
                    type="button"
                    className="btn btn-light"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary shadow-sm">
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Search */}
      <div className="input-group mb-3 shadow-sm">
        <span className="input-group-text bg-light border-0">
          <i class="bi bi-search"></i>
        </span>
        <input
          type="text"
          className="form-control border-0"
          placeholder={`Search ${capitalizedName}s...`}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Table */}
      <div className="table-responsive shadow-sm rounded">
        <table className="table table-hover align-middle mb-0">
          <thead className="table-primary">
            <tr>
              <th>ID</th>
              <th>Name</th>
              {isAdmin && <th className="text-center">Action</th>}
            </tr>
          </thead>
          <tbody>
            {currentItems.length > 0 ? (
              currentItems.map((item) => (
                <tr key={item[optionID]}>
                  <td>{item[optionID]}</td>
                  <td className="fw-semibold text-capitalize">
                    {item[optionName]}
                  </td>
                  {isAdmin && (
                    <td className="text-center">
                      <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => deleteItem(item[optionID])}
                      >
                        <i class="bi bi-trash"></i>
                      </button>
                    </td>
                  )}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={isAdmin ? 3 : 2} className="text-center py-4">
                  No results found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <nav className="d-flex justify-content-center mt-3">
        <ul className="pagination pagination-sm mb-0">
          <li className="page-item">
            <button
              className="page-link"
              onClick={() => setPageCount(0)}
              disabled={pageCount === 0}
            >
              &laquo;
            </button>
          </li>
          <li className="page-item">
            <button
              className="page-link"
              onClick={() => setPageCount((p) => Math.max(0, p - 1))}
              disabled={pageCount === 0}
            >
              Prev
            </button>
          </li>
          <li className="page-item disabled">
            <span className="page-link">{pageCount + 1}</span>
          </li>
          <li className="page-item">
            <button
              className="page-link"
              onClick={() => setPageCount((p) => p + 1)}
              disabled={pageCount + 1 >= totalPage}
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
              &raquo;
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Option;
