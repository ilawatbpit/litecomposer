// src/components/LightComposition.jsx
import React, { useState, useRef } from "react";
import Styles from "./LightComposition.module.css";
import ObjFile from "./ObjFile.jsx";
import Modal from "../Modal.jsx";
import Baseplate2D from "./Baseplate2D";

import { useWorkingModel } from "../../context/WorkingModelContext";

export default function LightComposition() {

  const { workingModel, setWorkingModel } = useWorkingModel();
  

  const objRef = useRef(null);

  const [currentData, setCurrentData] = useState(null);
  const [ismodalOpen, setIsModalOpen] = useState(false);
  const [panelOpen, setPanelOpen] = useState(true);
  const [stringHeights, setStringHeights] = useState([]);

  const [config, setConfig] = useState({
    rows: 9,
    cols: 5,
    pattern: "wave",
    spacing: 20,
    surfaceHeight: 170,
    surfaceLength: 0,
    surfaceWidth: 0,
    baseOffset: 10,
    lowest: 0,
    highest: 150,
  });

  /* ===============================
     UI HANDLERS
     =============================== */
  const handleModal = () => setIsModalOpen((p) => !p);
  const handlePanel = () => setPanelOpen((p) => !p);

  /* ===============================
     CONFIG CHANGE
     =============================== */
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "pattern") {
      setConfig((prev) => ({ ...prev, [name]: value }));
    } else {
      const intVal = parseInt(value, 10) || 0;
      setConfig((prev) => ({ ...prev, [name]: intVal }));

      if (name === "surfaceHeight") {
        if (intVal < prev.highest || intVal < prev.lowest) {
          setConfig((prev) => ({
            ...prev,
            highest: intVal,
            lowest: intVal,
          }));
        }
      }
    }
  };

  /* ===============================
     GENERATE 3D
     =============================== */
  const handleGenerate = () => {
    // trigger ObjFile update
    setConfig((prev) => ({ ...prev }));
    setGenerated(true);
  };

/* ===============================
   COLLECT DATA FOR MODAL
   =============================== */
const handleGetData = () => {
  // IMPORTANT: Must match ObjFile.jsx axis convention:
  // rows -> Length (Z), cols -> Width (X)
  const autoSurfaceLength =
    (config.rows - 1) * config.spacing + parseInt(config.baseOffset || 0, 10);

  const autoSurfaceWidth =
    (config.cols - 1) * config.spacing + parseInt(config.baseOffset || 0, 10);

  const surfaceLength =
    config.surfaceLength === 0 ? autoSurfaceLength : config.surfaceLength;

  const surfaceWidth =
    config.surfaceWidth === 0 ? autoSurfaceWidth : config.surfaceWidth;

  const data = {
    stringHeights,
    surface: {
      length: surfaceLength, // Z
      width: surfaceWidth,   // X
      height: config.surfaceHeight,
      baseOffset: config.baseOffset,
      spacing: config.spacing, // (optional, but useful later)
      rows: config.rows,
      cols: config.cols,
    },
    pattern: config.pattern,
    pendantType: "Custom Pendant",
    finishes: "Default",
    objFile: "/configurator/models/myModel.obj",
  };

  setCurrentData(data);
  setIsModalOpen(true);
};


  /* ===============================
     RENDER
     =============================== */
  return (
    <div className={Styles.wrapper}>
      {/* ================= PANEL ================= */}
      <div className="flex flex-col justify-start absolute h-screen bg-white">
        <div className="text-right p-4">
          <span onClick={handlePanel}>&times;</span>
        </div>

        <div
          className={`${Styles.panel} ${
            panelOpen
              ? "opacity-100 w-[290px] transition-all"
              : "opacity-0 w-[2px]"
          } duration-500 scrollbar-hide`}
        >
          {/* Pattern */}
          <label>
            Pattern:
            <select
              name="pattern"
              value={config.pattern}
              onChange={handleChange}
            >
              {[
                "flat",
                "dome",
                "reverseDome",
                "wave",
                "ripple",
                "spiral",
                "diagonal",
                "checkerboard",
                "random",
              ].map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </label>

          {/* Sliders */}
          {[
            { label: "Rows", name: "rows", min: 1, max: 20 },
            { label: "Columns", name: "cols", min: 1, max: 20 },
            { label: "Spacing", name: "spacing", min: 0, max: 100 },
            { label: "Base Plate Length", name: "surfaceLength", min: 0, max: 999 },
            { label: "Base Plate Width", name: "surfaceWidth", min: 0, max: 999 },
            { label: "Base Plate From Floor", name: "surfaceHeight", min: 0, max: 999 },
            { label: "Base Plate Offset", name: "baseOffset", min: 0, max: 30 },
            { label: "Lowest From Ground", name: "lowest", min: 0, max: config.surfaceHeight },
            { label: "Highest From Ground", name: "highest", min: 0, max: config.surfaceHeight },
          ].map(({ label, name, min, max }) => (
            <div key={name}>
              <label>{label}</label>
              <div className={Styles.inputsDiv}>
                <input
                  type="range"
                  name={name}
                  min={min}
                  max={max}
                  value={config[name]}
                  onChange={handleChange}
                />
                <input
                  type="number"
                  name={name}
                  min={min}
                  max={max}
                  value={config[name]}
                  onChange={handleChange}
                />
              </div>
            </div>
          ))}
          {workingModel}
        </div>

        {/* Generate Data */}
        <button
          className={`mx-auto mt-auto mb-10 ${
            panelOpen ? "opacity-100 w-3/4" : "opacity-0 w-0"
          }`}
          onClick={handleGetData}
        >
          Generate Data
        </button>
      </div>

      {/* ================= 3D VIEW ================= */}
      <ObjFile
        ref={objRef}
        config={config}
        onStringHeightsUpdate={setStringHeights}
      />

      {/* ================= MODAL ================= */}
      <Modal onClick={handleModal} modalState={ismodalOpen}>
        {currentData && (
          <div className="overflow-y-auto max-h-[80vh] w-[1500px] scrollbar-hide">
            <h1 className="text-3xl mb-4">Lighting Configuration</h1>
          {/* Export */}
            <div className="flex gap-2">
              <button
                className="mt-3 bg-black text-white p-4 rounded-md hover:bg-[#3bb44b]"
                onClick={() => objRef.current?.exportOBJ()}
              >
                Export to OBJ
              </button>
              <button
                className="mt-3 bg-black text-white p-4 rounded-md hover:bg-[#3bb44b]"
              >
                Export to PDF
              </button>
              <button
                className="mt-3 bg-black text-white p-4 rounded-md hover:bg-[#3bb44b]"
              >
                SAVE
              </button>
            </div>

            {/* 3D IMAGE */}
              <div></div>
            {/* 2D image */}
            <div className="w-[50%] m-auto">
              <Baseplate2D
                stringHeights={currentData.stringHeights}
                surface={currentData.surface}
                config={config}
              />
            </div>

            <div className="px-4 mt-6">
              <h2 className="text-xl mb-2">Technical Specs</h2>
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th>Position</th>
                    <th>Cable Length</th>
                  </tr>
                </thead>
                <tbody>
                  {currentData.stringHeights.map((s, i) => (
                    <tr key={i} className="border-b">
                      <td>{`R${s.row} C${s.col}`}</td>
                      <td>{`${s.stringHeight} cm`}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
