import React, { useEffect, useRef } from "react";

const Design = ({ placement }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    // Clear previous drawing
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw shirt outline (for demo)
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 2;

    if (placement === "front") {
      ctx.strokeRect(100, 60, 100, 150); // front view box
    } else if (placement === "back") {
      ctx.strokeRect(80, 50, 140, 160); // back view box
    } else if (placement === "side") {
      ctx.strokeRect(120, 50, 60, 160); // side view box
    }
  }, [placement]);

  return (
    <div className="container">
      <h1>Design </h1>
      <div className="design">
        <canvas ref={canvasRef} width={300} height={300}></canvas>
      </div>
    </div>
  );
};

export default Design;
