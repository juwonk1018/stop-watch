import "./App.css";

import React, {useEffect, useState} from "react";
import NavBar from "./components/NavBar.js";
import StopWatch from "./components/StopWatch";

function App() {


  const [isDarkMode, setIsDarkMode] = useState(false);
  const theme = isDarkMode ? 'dark' : 'light';

  return (
    <div className={`main ${theme}`}>
      <NavBar darkMode = {isDarkMode} setDarkMode = {setIsDarkMode}/>
      <StopWatch/>
    </div>
  );
}

export default App;