import Header from "./components/Header.jsx";
import SideBar from "./components/SideBar.jsx";
import { useWorkingModel } from "./context/WorkingModelContext";

import LightComposition from "./components/LightComposition/LightComposition";
import LightDetail from "./components/LightDetail";
import LightType from "./components/LightType";

import "./App.css";
import { useState } from "react";

function App() {

    const {btnClicked, setBtnClicked} = useWorkingModel();


  function handleTabClick(value) {
    setBtnClicked(value);
  }
  let content = null;
  const clickValue = btnClicked;
  if (clickValue === "type") {
    content = <LightType />;
  } else if (clickValue === "detail") {
    content = <LightDetail />;
  } else if (clickValue === "composition") {
    content = <LightComposition />;
  } else {
    content = <p>Please select a light option.</p>;
  }
  return (
    <>
      <div>
        <Header handleTabClick={handleTabClick} />
        <div className="main-container">
          <div className="side-bar ">
            <SideBar
              handleTabClick={handleTabClick}
              btnClicked={btnClicked}
            ></SideBar>
          </div>
          <div className="w-full ">
            {content}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
// new version
