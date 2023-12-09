import "./App.css";

import React, {useState} from "react";
import NavBar from "./components/NavBar";
import StopWatch from "./components/StopWatch";

function App() {

  const [darkMode, setDarkMode] = useState(Boolean);

  return (
    <div className="main">
      <NavBar darkMode = {darkMode} setDarkMode = {setDarkMode}/>
      <StopWatch/>
    </div>
  );
}

export default App;