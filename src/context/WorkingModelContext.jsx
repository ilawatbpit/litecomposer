// src/context/WorkingModelContext.jsx
import { createContext, useContext, useState } from "react";

const WorkingModelContext = createContext(null);

export function WorkingModelProvider({ children }) {
  const [workingModel, setWorkingModel] = useState("asdfasdf");

  return (
    <WorkingModelContext.Provider value={{ workingModel, setWorkingModel }}>
      {children}
    </WorkingModelContext.Provider>
  );
}

// custom hook (recommended)
export function useWorkingModel() {
  return useContext(WorkingModelContext);
}