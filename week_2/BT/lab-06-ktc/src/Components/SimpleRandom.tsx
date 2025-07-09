import React, { useState } from "react";

function SimpleRandom() {
  const [min, setMin] = useState<number>(0);
  const [max, setMax] = useState<number>(100);
  const [result, setResult] = useState<number | null>(null);

  const handleGenerate = () => {
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    setResult(randomNum);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2 style={{ color: "#007bff" }}>SIMPLE RANDOM</h2>
      <hr style={{ borderColor: "#007bff", marginBottom: "20px" }} />
      <div style={{ marginBottom: "20px" }}>
        <input
          type="number"
          value={min}
          onChange={(e) => setMin(Number(e.target.value))}
          style={{ marginRight: "10px", padding: "5px" }}
          placeholder="Min"
        />
        <input
          type="number"
          value={max}
          onChange={(e) => setMax(Number(e.target.value))}
          style={{ marginRight: "10px", padding: "5px" }}
          placeholder="Max"
        />
      </div>
      <button
        onClick={handleGenerate}
        style={{
          backgroundColor: "#007bff",
          color: "white",
          padding: "10px 20px",
          border: "none",
          cursor: "pointer",
        }}
      >
        Generate
      </button>
      <hr style={{ borderColor: "#ccc", margin: "20px 0" }} />
      <div style={{ fontSize: "24px" }}>
        {result !== null ? `Result: ${result}` : "No result yet"}
      </div>
    </div>
  );
}

export default SimpleRandom;
