import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/react"
import "./App.css";

import React, {useEffect, useState} from "react";
import NavBar from "./components/NavBar.js";
import StopWatch from "./components/StopWatch";

function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);
  const theme = isDarkMode ? 'dark' : 'light';
  const [recordList, setRecordList] = useState([]);
  const [visibleButton, setVisibleButton] = useState(true);

  return (
    <div className={`main ${theme}`}>
      <NavBar darkMode = {isDarkMode} setDarkMode = {setIsDarkMode} visibleButton = {visibleButton} setVisibleButton = {setVisibleButton}/>
      <StopWatch darkMode = {isDarkMode} setDarkMode = {setIsDarkMode} recordList = {recordList} setRecordList = {setRecordList}
        visibleButton = {visibleButton} setVisibleButton = {setVisibleButton}/>
      <SpeedInsights/>
      <Analytics/>
    </div>
  );
}

export default App;