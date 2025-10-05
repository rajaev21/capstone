import React from "react";

const DesignCanvas = () => {
  const handleDragStart = (event) => {
    event.dataTransfer.setData("text/plain", event.target.id);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const data = event.dataTransfer.getData("text/plain");
    const draggedElement = document.getElementById(data);
    event.target.appendChild(draggedElement);
  };

  return (
    <div style={{ padding: "20px" }}>
      <div
        id="draggable"
        draggable
        onDragStart={handleDragStart}
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: "skyblue",
          marginBottom: "10px",
          textAlign: "center",
          lineHeight: "100px",
          cursor: "grab",
        }}
      >
        Drag Me
      </div>

      <div
        id="dropZone"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        style={{
          width: "200px",
          height: "200px",
          border: "2px dashed black",
          textAlign: "center",
          lineHeight: "200px",
        }}
      >
        Drop Here
      </div>
    </div>
  );
};

export default DesignCanvas;
