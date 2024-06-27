import { useState } from "react";
import "./App.css";
import HeaderResume from "./components/header/HeaderResume";
function App() {
  return (
    <div className="app-container">
      <div className="input-container"></div>
      <div className="resume-container">
        <HeaderResume />
      </div>
    </div>
  );
}

export default App;
