import React, { useState } from "react";

function TemperatureConvert() {
  const [celsius, setCelsius] = useState<any | "">("");
  const [fahrenheit, setFahrenheit] = useState<any | "">("");
  const [kelvin, setKelvin] = useState<any | "">("");
  const [activeField, setActiveField] = useState<string | null>(null);

  const handleConvert = () => {
    if (
      activeField === "celsius" &&
      celsius !== "" &&
      !isNaN(Number(celsius))
    ) {
      const c = Number(celsius);
      setFahrenheit(((c * 9) / 5 + 32).toFixed(2));
      setKelvin((c + 273.15).toFixed(2));
    } else if (
      activeField === "fahrenheit" &&
      fahrenheit !== "" &&
      !isNaN(Number(fahrenheit))
    ) {
      const f = Number(fahrenheit);
      const c = ((f - 32) * 5) / 9;
      setCelsius(c.toFixed(2));
      setKelvin((c + 273.15).toFixed(2));
    } else if (
      activeField === "kelvin" &&
      kelvin !== "" &&
      !isNaN(Number(kelvin))
    ) {
      const k = Number(kelvin);
      const c = k - 273.15;
      setCelsius(c.toFixed(2));
      setFahrenheit(((c * 9) / 5 + 32).toFixed(2));
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    const val = e.target.value;
    if (field === "celsius") {
      setCelsius(val === "" ? "" : Number(val));
      setFahrenheit("");
      setKelvin("");
    } else if (field === "fahrenheit") {
      setFahrenheit(val === "" ? "" : Number(val));
      setCelsius("");
      setKelvin("");
    } else {
      setKelvin(val === "" ? "" : Number(val));
      setCelsius("");
      setFahrenheit("");
    }
    setActiveField(field);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2 style={{ color: "#007bff" }}>TEMPERATURE</h2>
      <hr style={{ borderColor: "#007bff", marginBottom: "20px" }} />
      <div>
        <input
          type="number"
          value={celsius === "" ? "" : String(celsius)}
          onChange={(e) => handleInputChange(e, "celsius")}
          placeholder="°C"
          style={{ margin: "5px", padding: "5px" }}
        />
        <input
          type="number"
          value={fahrenheit === "" ? "" : String(fahrenheit)}
          onChange={(e) => handleInputChange(e, "fahrenheit")}
          placeholder="°F"
          style={{ margin: "5px", padding: "5px" }}
        />
        <input
          type="number"
          value={kelvin === "" ? "" : String(kelvin)}
          onChange={(e) => handleInputChange(e, "kelvin")}
          placeholder="°K"
          style={{ margin: "5px", padding: "5px" }}
        />
      </div>
      <button
        onClick={handleConvert}
        style={{
          marginTop: "10px",
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Convert
      </button>
      <hr style={{ borderColor: "#ccc", margin: "20px 0" }} />
    </div>
  );
}

export default TemperatureConvert;
