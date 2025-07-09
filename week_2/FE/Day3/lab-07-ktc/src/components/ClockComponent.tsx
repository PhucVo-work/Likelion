import React from "react";
import CustomHook from "./CustomHook";

const ClockComponent: React.FC = () => {
  const currentTime = CustomHook();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🕒 Current Time</h1>
      <h2 style={{ fontSize: "3rem", color: "#0a66c2" }}>{currentTime}</h2>
    </div>
  );
};

export default ClockComponent;
