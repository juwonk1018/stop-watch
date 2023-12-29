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

  return (
    <div className={`main ${theme}`}>
      {/* <NavBar/> */}
      <StopWatch darkMode = {isDarkMode} setDarkMode = {setIsDarkMode} recordList = {recordList} setRecordList = {setRecordList}/>
      <SpeedInsights/>
      <Analytics/>
    </div>
  );
}

export default App;