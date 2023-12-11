import "./App.css";

import React, {useEffect, useState} from "react";
import NavBar from "./components/NavBar.js";
import StopWatch from "./components/StopWatch";

function App() {


  const [darkMode, setDarkMode] = useState(false);
  const theme = darkMode ? 'dark' : 'light';

  return (
    <div className={`main ${theme}`}>
      <NavBar darkMode = {darkMode} setDarkMode = {setDarkMode}/>
      <StopWatch/>
    </div>
  );
}

export default App;