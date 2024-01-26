import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/react"
import "./App.css";

import React, {useState} from "react";
import NavBar from "./features/navBar/NavBar";
import StopWatch from "./features/stopWatch/StopWatch";
import { useSelector } from 'react-redux';
import { RootState } from './app/store';

function App() {

  const theme : string = useSelector((state : RootState) => state.darkMode.value) ? "dark" : "light"  ;

  return (
    <div className={`main ${theme}`}>
      <NavBar/>
      <StopWatch/>
      <SpeedInsights/>
      <Analytics/>
    </div>
  );
}

export default App;