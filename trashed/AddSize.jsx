import axios from "axios";
import { useState } from "react";

const AddSize = ({
  setAddInput,
  fetchSize,
  fetchInventory,
  addInput,
  size,
  sizes,
  addSize,
}) => {
  const [addNewSize, setAddNewSize] = useState("");
  const data = {};

  function insertData() {
    if (!addNewSize) {
      alert("Size name cant be empty");
    }
    axios
      .post("http://localhost/capstone/submit.php", data, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        console.log(res.data);
        reset();
      })
      .catch((err) => console.error("Error adding option:", err));
  }

  function reset() {
    setAddInput("");
    fetchSize();
    fetchInventory();
    setAddInput("");
  }

  return (
    <section>
      
    </section>
  );
};

export default AddSize;
