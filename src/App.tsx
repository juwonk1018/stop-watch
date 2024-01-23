import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/react"
import "./App.css";

import React, {useState} from "react";
import NavBar from "./components/NavBar";
import StopWatch from "./components/StopWatch";

function App() {

  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const theme : string = isDarkMode ? 'dark' : 'light';
  const [recordList, setRecordList] = useState<string[][]>([]);
  const [visibleButton, setVisibleButton] = useState<boolean>(true);

  return (
    <div className={`main ${theme}`}>
      <NavBar darkMode = {isDarkMode} setDarkMode = {setIsDarkMode} visibleButton = {visibleButton} setVisibleButton = {setVisibleButton}/>
      <StopWatch darkMode = {isDarkMode} recordList = {recordList} setRecordList = {setRecordList} visibleButton = {visibleButton}/>
      <SpeedInsights/>
      <Analytics/>
    </div>
  );
}

export default App;