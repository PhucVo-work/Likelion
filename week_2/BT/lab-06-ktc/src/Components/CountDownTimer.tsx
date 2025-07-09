import React, { useState, useEffect } from "react";

function CountDownTimer() {
  const [time, setTime] = useState<number>(5 * 60); // 5 phút = 300 giây
  const [isActive, setIsActive] = useState<boolean>(false);
  let intervalId: number | null = null;

  useEffect(() => {
    if (isActive && time > 0) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000) as unknown as number;
    } else if (time === 0 && isActive) {
      alert("Thời gian đã hết!");
      setIsActive(false);
    }
    return () => {
      if (intervalId !== null) {
        clearInterval(intervalId);
      }
    };
  }, [isActive, time]);

  const handleStart = () => {
    setIsActive(true);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(5 * 60); // Reset về 5 phút
    if (intervalId !== null) {
      clearInterval(intervalId);
    }
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}m ${secs.toString().padStart(2, "0")}s`;
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2 style={{ color: "#007bff" }}>TIMER</h2>
      <hr style={{ borderColor: "#007bff", marginBottom: "20px" }} />
      <div style={{ fontSize: "48px", marginBottom: "20px" }}>
        {formatTime(time)}
      </div>
      <hr style={{ borderColor: "#ccc", marginBottom: "20px" }} />
      <button
        onClick={handleStart}
        style={{
          backgroundColor: "#007bff",
          color: "white",
          padding: "10px 20px",
          marginRight: "10px",
          border: "none",
          cursor: "pointer",
        }}
        disabled={isActive}
      >
        START
      </button>
      <button
        onClick={handleReset}
        style={{
          backgroundColor: "#fff",
          color: "#000",
          padding: "10px 20px",
          border: "1px solid #ccc",
          cursor: "pointer",
        }}
      >
        RESET
      </button>
    </div>
  );
}

export default CountDownTimer;
