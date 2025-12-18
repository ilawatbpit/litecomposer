// src/context/WorkingModelContext.jsx
import { createContext, useContext, useState } from "react";

const WorkingModelContext = createContext(null);

export function WorkingModelProvider({ children }) {
  const [workingModel, setWorkingModel] = useState("");
  const [btnClicked, setBtnClicked] = useState("type");

  return (
    <WorkingModelContext.Provider
      value={{
        workingModel,
        setWorkingModel,
        btnClicked,
        setBtnClicked,
      }}
    >
      {children}
    </WorkingModelContext.Provider>
  );
}

// custom hook (recommended)
export function useWorkingModel() {
  const context = useContext(WorkingModelContext);
  if (!context) {
    throw new Error(
      "useWorkingModel must be used within a WorkingModelProvider"
    );
  }
  return context;
}
