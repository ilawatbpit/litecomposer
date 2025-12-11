// src/components/ConfiguratorPanel.jsx
import React from "react";

const ConfiguratorPanel = ({ values, setValues, generateGrid }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: +value }));
  };

  return (
    <div style={panelWrapper}>
      <div style={panelHeader}>Configuration</div>

      {/* Pattern selector */}
      <div style={formGroup}>
        <label style={labelStyle}>Pattern</label>
        <select
          name="pattern"
          value={values.pattern}
          onChange={handleChange}
          style={inputSelect}
        >
          {[
            "flat",
            "wave",
            "ripple",
            "diagonal",
            "checkerboard",
            "random",
            "spiral",
            "reverseDome",
            "dome",
          ].map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
      </div>

      {/* Number Inputs */}
      {[
        { key: "rows", label: "Rows" },
        { key: "cols", label: "Columns" },
        { key: "spacing", label: "Spacing" },
        { key: "surfaceLength", label: "Base Plate Length" },
        { key: "surfaceWidth", label: "Base Plate Width" },
        { key: "surfaceHeight", label: "Base From Floor" },
        { key: "baseOffset", label: "Base Plate Offset" },
        { key: "lowest", label: "Lowest Drop Height" },
        { key: "highest", label: "Highest Drop Height" },
      ].map(({ key, label }) => (
        <div key={key} style={formGroup}>
          <label style={labelStyle}>{label}</label>
          <input
            type="number"
            name={key}
            value={values[key]}
            onChange={handleChange}
            style={inputNumber}
          />
        </div>
      ))}

      {/* Button */}
      <button style={buttonStyle} onClick={generateGrid}>
        Generate Grid
      </button>
    </div>
  );
};

/* ----------------------------------------------------------
   NEW STYLES
---------------------------------------------------------- */

// MAIN PANEL
const panelWrapper = {
  position: "absolute",
  top: 20,
  left: 20,
  width: 280,
  maxHeight: "90vh",
  padding: "20px 18px",

  background: "rgba(255, 255, 255, 0.45)",
  borderRadius: "18px",
  backdropFilter: "blur(10px)",
  WebkitBackdropFilter: "blur(10px)",
  boxShadow: "0 8px 32px rgba(0,0,0,0.18)",

  overflowY: "scroll",
  scrollbarWidth: "none",
  msOverflowStyle: "none",
};

// Hide scrollbar (Chrome)
document.documentElement.style.setProperty(
  "--hide-scrollbar",
  `
::-webkit-scrollbar { display: none; }
`
);

// Section Header
const panelHeader = {
  fontSize: 20,
  fontWeight: 700,
  marginBottom: 15,
  color: "#111",
  letterSpacing: "0.4px",
};

// Wrapper for each field
const formGroup = {
  marginBottom: 12,
  display: "flex",
  flexDirection: "column",
};

// Label
const labelStyle = {
  fontSize: 14,
  fontWeight: 500,
  marginBottom: 4,
  color: "#222",
};

// Inputs
const baseInput = {
  width: "100%",
  padding: "8px 10px",
  borderRadius: 8,
  border: "1px solid #bbb",
  fontSize: 14,
  background: "rgba(255,255,255,0.8)",
};

const inputNumber = {
  ...baseInput,
};

const inputSelect = {
  ...baseInput,
};

// Button
const buttonStyle = {
  marginTop: 20,
  width: "100%",
  padding: "10px 0",
  fontSize: 15,
  fontWeight: 600,
  borderRadius: 8,
  background: "#111",
  color: "white",
  border: "none",
  cursor: "pointer",
  transition: "0.2s",
};

buttonStyle["&:hover"] = {
  background: "#333",
};

export default ConfiguratorPanel;
