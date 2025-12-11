// LightComposition.jsx
import React, { useState } from "react";
import Styles from "./LightComposition.module.css";
import ObjFile from "./ObjFile.jsx";
import Modal from "../Modal.jsx";

import Baseplate2D from "./Baseplate2D";

export default function LightComposition() {
  const [currentData, setCurrentData] = useState("");
  const [ismodalOpen, setIsModalOpen] = useState(false);
  const [panelOpen, setPanelOpen] = useState(true);

  function handleModal() {
    setIsModalOpen((prev) => !prev);
  }

  function handlePanel() {
    setPanelOpen((prev) => !prev);
  }

  const handleGetData = () => {
    const surfaceLength =
      config.surfaceLength === 0
        ? (config.cols - 1) * config.spacing +
        parseInt(config.baseOffset || 0, 10)
        : config.surfaceLength;
    const surfaceWidth =
      config.surfaceWidth === 0
        ? (config.rows - 1) * config.spacing +
        parseInt(config.baseOffset || 0, 10)
        : config.surfaceWidth;

    const data = {
      stringHeights,
      surface: {
        length: surfaceLength,
        width: surfaceWidth,
        height: config.surfaceHeight,
        baseOffset: config.baseOffset,
      },
      pattern: config.pattern,
      pendantType: "Your pendant type here",
      finishes: "Your finishes here",
      objFile: "/configurator/models/myModel.obj",
    };

    handleModal();
    setCurrentData(data);

    // You can also show in UI, download as JSON, etc.
  };

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "pattern") {
      setConfig((prev) => ({ ...prev, [name]: value }));
    } else {
      setConfig((prev) => ({ ...prev, [name]: parseInt(value, 10) }));
    }

    if (name === "surfaceHeight") {
      if (value < config.highest || value < config.lowest) {
        setConfig((prev) => ({ ...prev, highest: value, lowest: value }));
      }
    }
  };

  const handleGenerate = () => {
    setConfig((prev) => ({
      ...prev,
      version: prev.version + 1,
    }));
  };

  return (
    <div className={Styles.wrapper}>
      <div className={`flex flex-col justify-start absolute h-screen bg-white`}>
        <div className="text-right p-4">
          <span onClick={handlePanel}>&times;</span>
        </div>
        <div
          className={`${Styles.panel} ${panelOpen
            ? "opacity-1 w-[290px] transition-[opacity] delay-200"
            : "opacity-0 w-[2px]"
            } transition-[width] duration-500 scrollbar-hide`}
        >
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

          {[
            { labelName: "Rows", name: "rows", max: 20, min: 1, val: 0 },
            { labelName: "Column", name: "cols", max: 20, min: 1, val: 0 },
            { labelName: "Spacing", name: "spacing", max: 100, min: 0, val: 0 },
            {
              labelName: "Base Plate Length",
              name: "surfaceLength",
              max: 999,
              min: 0,
              val: 0,
            },
            {
              labelName: "Base Plate Width",
              name: "surfaceWidth",
              max: 999,
              min: 0,
              val: 0,
            },
            {
              labelName: "Base Plate From Floor",
              name: "surfaceHeight",
              max: 999,
              min: 0,
              val: 0,
            },
            {
              labelName: "Base Plate Offset",
              name: "baseOffset",
              max: 30,
              min: 0,
              val: 0,
            },
            {
              labelName: "Lowest From the Ground",
              name: "lowest",
              max: 999,
              min: 0,
              val: 0,
            },
            {
              labelName: "Highest From the Ground",
              name: "highest",
              max: 999,
              min: 0,
              val: 0,
            },
          ].map(({ name, max, min, labelName }) => {
            const isBaseOffsetShow =
              !(name === "baseOffset" && config.surfaceLength == 0) ||
              !(name === "baseOffset" && config.surfaceWidth == 0);

            const isInactive =
              (name === "surfaceLength" && config.surfaceLength == 0) ||
              (name === "surfaceWidth" && config.surfaceWidth == 0);

            if (name === "lowest" || name === "highest") {
              max = config.surfaceHeight;
            }

            return (
              <div
                style={
                  name === "baseOffset"
                    ? isBaseOffsetShow
                      ? {
                        opacity: 0,
                        maxHeight: 0,
                        overflow: "hidden",
                        transition:
                          "opacity 1s ease, max-height 0.5s ease 0.3s",
                      }
                      : {
                        opacity: 1,
                        maxHeight: "500px",
                        overflow: "hidden",
                        transition:
                          "opacity 1s ease 0.5s, max-height 2s ease 0.5s",
                      }
                    : undefined
                }
              >
                <label
                  key={name}
                  style={{
                    ...(isInactive ? { color: "#ddd" } : {}),
                    ...(name === "surfaceLength" || name === "lowest"
                      ? { marginTop: "70px" }
                      : {}),
                  }}
                >
                  {labelName}:
                </label>
                <div className={Styles.inputsDiv}>
                  <input
                    type="range"
                    name={name}
                    value={config[name]}
                    onChange={handleChange}
                    min={min}
                    max={max}
                    className={isInactive ? Styles.inactive : ""}
                  />
                  <input
                    type="number"
                    name={name}
                    value={config[name]}
                    onChange={handleChange}
                    min={min}
                    max={max}
                    style={
                      isInactive
                        ? {
                          color: "#ddd",
                        }
                        : {}
                    }
                  />
                </div>
              </div>
            );
          })}
          <div></div>
          <button
            style={
              config.pattern === "random"
                ? { opacity: 1, transition: "opacity 0.7s ease" }
                : { opacity: 0, transition: "opacity 0.7s ease" }
            }
            onClick={handleGenerate}
          >
            Generate
          </button>
        </div>
        <button
          className={`mx-auto mt-auto mb-10
            ${panelOpen
              ? "opacity-1 w-3/4 transition-all delay-500"
              : "opacity-0 w-0"
            }`}
          onClick={handleGetData}
        >
          Generate Data
        </button>
      </div>
      <ObjFile config={config} onStringHeightsUpdate={setStringHeights} />

      <div>
        <Modal onClick={handleModal} modalState={ismodalOpen}>
<div className="overflow-y-auto max-h-[80vh] w-[1500px] scrollbar-hide">
            {currentData ? (
              <div>
                <h1 className="text-3xl">LOREM IPSUM</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi, dicta fugiat eaque iusto nam hic possimus. </p>

                {/* 3D IMAGE HERE */}
                <div className="w-[50%] m-auto" style={{ transform: "rotate(90deg)" }}>
                  <Baseplate2D
                    stringHeights={currentData.stringHeights}
                    surface={currentData.surface}
                    config={config}
                  />
                </div>

                <div className="px-4">
                  <h1>Technical Specs</h1>
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="py-2">POSITION</th>
                        <th className="py-2">LIGHT TYPE</th>
                        <th className="py-2">COLOR</th>
                        <th className="py-2">FITTING COLOR</th>
                        <th className="py-2">CABLE LENGTH</th>
                        <th className="py-2">ITEMCODE</th>
                      </tr>
                    </thead>

                    <tbody className="divide-y">
                      {currentData.stringHeights.map((string, index) => (
                        <tr key={index} className="border-b">
                          <td className="py-2">{`${string.row}-${string.col}`}</td>
                          <td className="py-2"></td>
                          <td className="py-2"></td>
                          <td className="py-2"></td>
                          <td className="py-2">{`${string.stringHeight} cm`}</td>
                          <td className="py-2"></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                </div>
              </div>
            ) : (
              // col: 1
              // pendantY: 19
              // row: 0
              // stringHeight: 151

              // const data = {
              //   stringHeights,
              //   surface: {
              //     length: surfaceLength,
              //     width: surfaceWidth,
              //     height: config.surfaceHeight,
              //   },
              //   pattern: config.pattern,
              //   pendantType: "Your pendant type here",
              //   finishes: "Your finishes here",
              //   objFile: "/configurator/models/myModel.obj",
              // };

              ""
            )}
          </div>
        </Modal>
      </div>
    </div>
  );
}
