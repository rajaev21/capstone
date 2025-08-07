import React from "react";
import Option from "./Option";
import Price from "./Price"
import { Link } from "react-router-dom";


const Settings = ({
  brand,
  setBrand,
  color,
  setColor,
  size,
  setSize,
  type,
  setType,
  fetchColor,
  fetchType,
  fetchSize,
  fetchBrand,
}) => {
  return (
    <div className="container ">
      <div className="options">
        <div className="h3 text-center">Options</div>
      <div className="row my-5">

        <div className="col card">
          <div className="card-body">
            <h4 className="card-title text-center">Brands</h4>
            <Option
              option={brand}
              setOption={setBrand}
              name={"brand"}
              fetch={fetchBrand}
            />
          </div>
        </div>

        <div className="col card">
          <div className="card-body">
            <h4 className="card-title text-center">Types</h4>
            <Option
              option={type}
              setOption={setType}
              name={"type"}
              fetch={fetchType}
            />
          </div>
        </div>

        <div className="col card">
          <div className="card-body">
            <h4 className="card-title text-center">Colors</h4>
            <Option
              option={color}
              setOption={setColor}
              name={"color"}
              fetch={fetchColor}
            />
          </div>
        </div>

        <div className="col card">
          <div className="card-body">
            <h4 className="card-title text-center">Sizes</h4>
            <Option
              option={size}
              setOption={setSize}
              name={"size"}
              fetch={fetchSize}
            />
          </div>
        </div>
      </div>
      </div>
      
      <Link to="/register">Register Employee</Link>
    </div>
  );
};

export default Settings;
