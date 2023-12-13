import "./App.css";

import React, {useEffect, useState} from "react";
import NavBar from "./components/NavBar.js";
import StopWatch from "./components/StopWatch";

function App() {


  const [isDarkMode, setIsDarkMode] = useState(false);
  const theme = isDarkMode ? 'dark' : 'light';

  return (
    <div className={`main ${theme}`}>
      {/* <NavBar/> */}
      <StopWatch darkMode = {isDarkMode} setDarkMode = {setIsDarkMode}/>
    </div>
  );
}

export default App;