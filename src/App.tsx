import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/react"
import "./App.css";

import React, {useState} from "react";
import NavBar from "./components/NavBar";
import StopWatch from "./components/StopWatch";
import { useSelector } from 'react-redux';
import { RootState } from './reducers/store';

function App() {

  const theme : string = useSelector((state : RootState) => state.darkMode.value) ? "dark" : "light"  ;
  const [recordList, setRecordList] = useState<string[][]>([]);
  const [visibleButton, setVisibleButton] = useState<boolean>(true);

  return (
    <div className={`main ${theme}`}>
      <NavBar/>
      <StopWatch recordList = {recordList} setRecordList = {setRecordList}/>
      <SpeedInsights/>
      <Analytics/>
    </div>
  );
}

export default App;